import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Upnext from "../Components/Upnext";
import Slides from "../Components/Slides";

import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { categoriesMovies } from "../services/api";
import { NowPLaying_URL } from "../assets/Constants";

const Component = styled(Box)`
  padding: 0 115px;
`;
const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await categoriesMovies(NowPLaying_URL);
      console.log(response.results);
      setMovies(response.results);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <Upnext movies={movies} />
        </Wrapper>
        <Slides movies={movies} />
        <Slides movies={movies} />
        <Slides movies={movies} />
        <Slides movies={movies} />
      </Component>
    </>
  );
}

export default Home;
