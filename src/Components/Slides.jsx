import { Box, Typography, styled } from "@mui/material";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Styledbanner = styled("img")`
  width: 100%;
`;

const Styletypo = styled(Typography)`
  color: #ffffff;
  font-weight: 700px;
  font-size: 18px;
  padding: 5px;
`;
const Slides = (props) => {
  const { movies } = props;
  return (
    <>
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
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="banneer"
            />
            <Styletypo>{movie.original_title}</Styletypo>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

Slides.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Slides;
