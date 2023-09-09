import styled from "@emotion/styled";

import { List, ListItem, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
function Movieslist(prop) {
  const { movies } = prop;

  const Stylebanner = styled("img")({
    width: 47,
  });

  const Styletypo = styled(Typography)`
    color: #000000;
  `;

  const Container = styled(List)`
    display: flex;
  `;
  return (
    <>
      {movies.map((movie) => (
        <Container key={movie.id}>
          <ListItem>
            <Stylebanner
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="poster"
            />
          </ListItem>
          <ListItem>
            <Styletypo>{movie.original_title}</Styletypo>
          </ListItem>

          <ListItem>
            <Star color="warning" />
            <Typography>{movie.vote_average}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{movie.release_date}</Typography>
          </ListItem>
        </Container>
      ))}
    </>
  );
}

export default Movieslist;
