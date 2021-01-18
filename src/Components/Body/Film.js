import React from "react";
import styled from "@emotion/styled";
let ApiImg = "https://image.tmdb.org/t/p/w500";

function Film({
  poster_path,
  movie,
  id,
  overview,
  original_title,
  vote_average,
  title,
}) {
  const Films = styled.div`
    width: 22%;
    height: 500px;
    background: #0b1c2d;
    margin-right: 10px;
    margin-bottom: 20px;
    color: white;
  `;
  const Img = styled.img`
    width: 100%;
    height: 80%;
    background-position: center;
    background-size: cover;
    
    
  `;
  const Form = styled.div`
    width: 100%;
    padding-left:5px;

  `;
  const Title = styled.p`
    font-size: 17px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-top: 10px;
    font-weight:bold;
  `;
  const Vote_rate = styled.p`
    color: #d8d8d8;
    font-size: 12px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-top: 5px;

  `;

  // style
  return (
    <Films>
      <Img src={ApiImg + poster_path} alt={title} />
      <Form>
      <Title>Movie: {original_title}</Title>
        <Vote_rate>Vote Rate:  {vote_average}</Vote_rate>
      </Form>
    </Films>
  );
}

export default Film;
