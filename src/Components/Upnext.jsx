import PropTypes from "prop-types";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 44%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: 600px;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Poster = styled("img")`
  width: 88px;
`;

const Wrapper = styled(Box)`
  display: flex;
  & > p {
    color: #ffffff;
    font-weight: 500;
    padding-left: 5px;
  }
`;

const Upnext = (props) => {
  const { movies } = props;
  return (
    <>
      <Component className="container">
        <Typography>UPnext</Typography>

        {movies.splice(0, 3).map((movie) => (
          <Wrapper key={movie.id}>
            <Poster
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="poster"
            />
            <Typography>{movie.original_title}</Typography>
          </Wrapper>
        ))}
      </Component>
    </>
  );
};
Upnext.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Upnext;
