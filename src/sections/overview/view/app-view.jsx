
/* eslint-disable */

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import { Web3Button } from '@thirdweb-dev/react';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import { Box, Card, Stack, TextField } from '@mui/material';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Bienvenido inversor semilla de Cocay    👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Cantidad de tokens vendidos"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Inversión"
            total={150000}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>



        <Grid xs={12} sm={6} md={6}>
        <Card
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
      }}
    >
      <Box sx={{ width: 64, height: 64 }}><img alt="icon" src="/assets/icons/glass/ic_glass_users.png" /></Box>

      <Stack spacing={0.5}>
        <Typography variant="h4">Crear codigo de referidos</Typography>

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
        <TextField name="email" label="Codigo" />
        <TextField name="email" label="Wallet" />
        <TextField name="email" label="Porcentaje a compartir" />
        <br></br>
        <Web3Button
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0x0e07D1e7495aE9ACBf51CD960459127131C94898"
          contractAbi={[]}
          action={async (contract) => {
                await contract.call("buyMembership", ["", "0x0000000000000000000000000000000000000123"])

          }}
          onSuccess={(result) => alert("Success!")}
          onError={(error) => alert(`Error --> ${error.message}`)}
          className="buyMembershipClass"
        >
          Crear
        </Web3Button>
        </Typography>
      </Stack>
    </Card>
        </Grid>

        <Grid xs={12} sm={6} md={6}>
        <Card
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
      }}
    >
      <Box sx={{ width: 64, height: 64 }}><img alt="icon" src="/assets/icons/glass/ic_glass_users.png" /></Box>

      <Stack spacing={0.5}>
        <Typography variant="h4">Comprar token Cocay</Typography>

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
        <TextField name="email" label="Cantidad" />
        <TextField name="email" label="Codigo referido" />
        <br></br>
        <Web3Button
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0x0e07D1e7495aE9ACBf51CD960459127131C94898"
          contractAbi={[]}
          action={async (contract) => {
                await contract.call("buyMembership", ["", "0x0000000000000000000000000000000000000123"])

          }}
          onSuccess={(result) => alert("Success!")}
          onError={(error) => alert(`Error --> ${error.message}`)}
          className="buyMembershipClass"
        >
          Comprar
        </Web3Button>
        </Typography>
      </Stack>
    </Card>
        </Grid>
     

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Compras en los ultimos meses"
            subheader=""
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
              
                {
                  name: 'Compras',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Ventas',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Tipo de compradores"
            chart={{
              series: [
                { label: 'Menores a 1000usd', value: 70 },
                { label: 'Menores a 12000usd', value: 20 },
                { label: 'Menores a 50000usd', value: 8 },
                { label: 'Menores a 100000', value: 2 },
              ],
            }}
          />
        </Grid>

       {/* <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>



             <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
          */}
        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Trafico en los sitios"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

   
      </Grid>
    </Container>
  );
}
/* eslint-disable */
