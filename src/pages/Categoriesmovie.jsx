import { Box, Divider, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import { moviePath } from "../assets/Route";
import Movieslist from "../Components/Movieslist";
import {
  popular_api_url,
  top_rated_api_url,
  upcoming_api_url,
} from "../assets/Constants";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { categoriesMovies } from "../services/api";
import styled from "@emotion/styled";

const Categoriesmovie = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await categoriesMovies(API_URL);
      console.log(response.results);
      setMovies(response.results);
    };
    let API_URL;
    if (search.includes("popular")) {
      API_URL = popular_api_url;
    } else if (search.includes("upcoming")) {
      API_URL = upcoming_api_url;
      console.log(API_URL);
    } else if (search.includes("toprated")) {
      API_URL = top_rated_api_url;
    }
    getData(API_URL);
  }, [search]);

  const Styledbanner = styled("img")({
    height: 450,
    width: "100%",
  });
  const Container = styled(Box)`
    background-color: #f5f5f5;
    & > p {
      font-weight: 700px;
      margin-top: 2px;
    }
  `;
  const Component = styled(Box)`
    width: 80%;
    margin: auto;
  `;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Header />
      <Component>
        <Carousel
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          responsive={responsive}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          slidesToSlide={1}
        >
          {movies.map((movie) => (
            <Box key={movie.id}>
              <Styledbanner
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="banneer"
              />
              {/* <Styletypo>{movie.original_title}</Styletypo> */}
            </Box>
          ))}
        </Carousel>
        <Container>
          <Typography variant="h5">Movie Chart</Typography>
          <Typography variant="h3">
            Movieflex {moviePath[search.split("=")[1]]} movies
          </Typography>
          <Typography>Movieflex top {movies.length} rated by users</Typography>
          <Divider />
          <Movieslist movies={movies} />
        </Container>
      </Component>
    </>
  );
};

export default Categoriesmovie;
