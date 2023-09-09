import { Box, styled } from "@mui/material";

import PropTypes from "prop-types";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Component = styled(Box)`
  width: 65%;
`;

const Bannerimage = styled("img")`
  width: 100%;
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
const Banner = (props) => {
  const { movies } = props;
  return (
    <>
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
            <Bannerimage
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="banneer"
            />
          ))}
        </Carousel>
      </Component>
    </>
  );
};

Banner.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Banner;
