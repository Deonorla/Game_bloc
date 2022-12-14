import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";

const CreateTournament = () => {
  const { id } = useParams();
  const tournamentImg = useContext(UserContext);

  return (
    <Container>
      <div>
        {tournamentImg
          .filter((list) => list.id == id)
          .map((list) => (
            <Img
              key={list.id}
              style={{ backgroundImage: `url(${list.background})` }}
            ></Img>
          ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: #35356b;
  @media (min-width: 1200px) {
    width: 60vw;
  }
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 0.5rem;
  /* background-repeat: no-repeat; */
  background-size: 100% 50%;
  width: 99%;
  height: 20rem;
  border-radius: 12px;
`;

export default CreateTournament;
