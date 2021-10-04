import React from "react";
import styled from "styled-components";

// const Container = styled.div`
//   height: 380px;
//   width: 100%;
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//   overflow: hidden;
//   border-radius: 7px;
// `;

const Poster = styled.div`
  width: 200px;
  height: 300px;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Suggestion = ({ bg }) => {
  return (
    <div>
      <Poster bg={bg}></Poster>
    </div>
  );
};

export default Suggestion;
