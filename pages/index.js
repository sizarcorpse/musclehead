import { Container, Grid, styled } from "@mui/material";
import { HomeHero } from "components/section";
import { mockHome } from "mocks/";
import Head from "next/head";
const Home = (props) => {
  const {} = props;
  const { hero } = mockHome;
  return (
    <Grid>
      <Head>
        <title>Home</title>
        <meta name="description" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid item>
        <HomeHero {...hero} />
      </Grid>
    </Grid>
  );
};

export default Home;
