import React from "react";
import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Suggestion from "../components/Suggestion";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Movieinfo = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 20%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  bottom: 50px;
`;
const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  return (
    <Container>
      <Movieinfo>
        <Column>
          <Title>{loading ? "Loading..." : data.movie.title}</Title>
          <>
            <Subtitle>
              {data?.movie?.language} · {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro} </Description>
          </>
        </Column>
        <Poster bg={data?.movie?.medium_cover_image}></Poster>
      </Movieinfo>
      <Movies>
        {data?.suggestions?.map((s) => (
          <Suggestion key={s.id} bg={s.medium_cover_image} />
        ))}
      </Movies>
    </Container>
  );
};

export default Detail;
