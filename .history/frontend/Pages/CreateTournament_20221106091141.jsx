import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Context/UserContext";
import near_logo from "../assets/near-logo.png";

const CreateTournament = () => {
  const { id } = useParams();
  const tournamentImg = useContext(UserContext);

  return (
    <Container>
      <div>
        {tournamentImg
          .filter((list) => list.id == id)
          .map((list) => (
            <Details key={list.id}>
              <Img style={{ backgroundImage: `url(${list.background})` }}>
                <Title>{list.title}</Title>
                <Description>{list.description}</Description>
                <Tags>
                  <Tag1>{list.genre}</Tag1>
                  <Tag2>{list.adventure}</Tag2>
                  <Tag3>{list.action}</Tag3>
                </Tags>
              </Img>
            </Details>
          ))}

        <TournamentContainer>
          <h2>Tournament Details</h2>
          <InputContainer>
            <InputLabel>
              <h3>Tournament Prize</h3>
              <Form>
                <Logo src={near_logo} alt="" />
                <Input type="number" placeholder="Input amount in Near" />
              </Form>
            </InputLabel>
          </InputContainer>
        </TournamentContainer>
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
  opacity: 0.7;
  justify-content: space-between;
  padding: 0 0 0 0.5rem;
  /* background-repeat: no-repeat; */
  background-size: 100% 100%;
  width: 99%;
  height: 20rem;
  border-radius: 12px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
`;
const Details = styled.div``;

const Description = styled.p`
  font-size: 14px;
  color: white;
  width: 25rem;
  height: 5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  background: #991ba5;
  border-radius: 9999px;
  padding: 0.1rem 0.5rem;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 1rem;
    margin: 0 0 0 8px;
  }
`;

const Tag2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  background: #057faf;
  border-radius: 9999px;
  padding: 0.1rem 0.5rem;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 1rem;
    margin: 0 0 0 8px;
  }
`;

const Tag3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  background: #05af93;
  border-radius: 9999px;
  padding: 0.1rem 0.5rem;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 1rem;
    margin: 0 0 0 8px;
  }
`;

const TournamentContainer = styled.div`
  background-color: #41417c;
  border-top-left-radius: 1.4rem;
  border-top-right-radius: 1.4rem;
  margin: 1rem 0.5rem;
  padding: 0 0 1rem 0;
  height: 100%;
  h2 {
    text-align: center;
    color: #ffffff;
    padding: 1rem 0;
  }
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const InputLabel = styled.div``;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #393963;
  border: none;
  padding-left: 30px;
  border-radius: 8px;
  ::placeholder {
    color: gray;
  }
`;

export default CreateTournament;
