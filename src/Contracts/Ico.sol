// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract IcoCocay is Ownable {
    IERC20 public USDT;
    IERC20 public CocayToken;
    address public CocayWallet;
    address public AiSolvesAddress;

    mapping(string => address) public sponsorCodes;
    mapping(address => bool) public haveSponsorCode;
    mapping(address => address) public parent;
    mapping(address => uint256) public amountRefferal;


    constructor(address _usdtAddress, address _cocayAddress, address _cocayWallet, address _aiSolvesAddress) Ownable(msg.sender){
        USDT = IERC20(_usdtAddress);
        CocayToken = IERC20(_cocayAddress);
        CocayWallet = _cocayWallet;
        AiSolvesAddress = _aiSolvesAddress;
    }

    function addSponsor(string memory _name, address _refferal, uint256 _amount) public {
        if(msg.sender != CocayWallet || msg.sender != AiSolvesAddress){
            require(haveSponsorCode[msg.sender], "Requiere un codigo de referidos");
        }

        parent[_refferal] = msg.sender; //Setea el padre como el que lo invito
        haveSponsorCode[_refferal] = true; //Le pone true en que tieen codigo refeido
        sponsorCodes[_name] = _refferal; //Le setea a ese codigo referid esa wallet

        uint256 cantAmount; //Variable local de cantidad por referdio
        address nextRefferal = _refferal; //Variable local El siguiente referido, (seria el abuelo)
        for (uint256 i = 0; i < 10; i++) {
            cantAmount += amountRefferal[nextRefferal]; //Le aumenta a cantAmount la cantidad de su padre
            nextRefferal  = parent[_refferal]; //Pone como el siguiente referido al abuelo
            if(cantAmount >= 100){
                revert(); //Si la cantidad es igual o mayor a 10% revierte
            }
            if(_refferal == AiSolvesAddress){
                 break; //Si se llego al inicio es decir a la wallet de AiSolves frena
            }
        }
        if(_amount <= (100 - cantAmount)){
            amountRefferal[_refferal] = _amount; //Si la cantidad es menor o igual a 10% - la cantidad acumulada se agrega
        }
    }

    function buyCocays(uint256 _amount, string memory _sponsorCode) public {
      require(USDT.transferFrom(msg.sender,CocayWallet, (_amount * 800) / 1000), "USDT transfer failed"); //Envia el 80% a Cocay
      require(USDT.transferFrom(msg.sender,AiSolvesAddress, (_amount * 100) / 1000), "USDT transfer failed"); //Envia el 10% a AiSolves

    
      uint256 cantAmount; //Cantidad acumulada
      address nextRefferal = sponsorCodes[_sponsorCode]; //Agarra el sponsor desde el parametro
      for (uint256 i = 0; i < 10; i++) {
            cantAmount = amountRefferal[nextRefferal];
            require(USDT.transferFrom(msg.sender,nextRefferal, cantAmount / 1000), "USDT transfer failed");
            nextRefferal  = parent[_refferal];
            if(_refferal == AiSolvesAddress){
                 break;
            }
       }

      require(CocayToken.transfer(msg.sender, (_amount)), "No se pudo enviar token Cocay");
    }
}
