import React from "react";
import styled from "styled-components";
import TournamentData from "../Features/TournamentData";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";

const Tournament = () => {
  return (
    <Container>
      <BackButton>
        <Back />
        <p>Back</p>
      </BackButton>
      <Heading>Choose a Tournament</Heading>
      <TournamentCard>
        {TournamentData.map((data, index) => {
          return (
            <Imgslide key={index}>
              <Img style={{ backgroundImage: `url(${data.background})` }}>
                <Seen>
                  <Eye />
                  <p>{data.view}</p>
                </Seen>
                <h4>{data.title}</h4>
              </Img>
            </Imgslide>
          );
        })}
      </TournamentCard>
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

const Heading = styled.h2`
  color: #df78e3;
  font-size: 22px;
  margin: 2rem 0 0 1rem;
  font-weight: 500;
`;

const TournamentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1rem;
  @media (min-width: 686px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Imgslide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 0.5rem;
  width: 100%;
  height: 12rem;
  border-radius: 12px;

  h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-left: 8px;
  }
`;

const Seen = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(255, 255, 255, 0.34);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 9999px;
  padding: 0.1rem 0.5rem;
  width: fit-content;
  margin-top: 1rem;

  p {
    color: #fff;
    font-size: 1rem;
    margin: 0 0 0 8px;
  }
`;

const Eye = styled(AiOutlineEye)`
  color: #fff;
  font-size: 21px;
`;

const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const Back = styled(IoIosArrowRoundBack)`
  color: #df78e3;
  p {
    color: #df78e3;
    font-size: 1rem;
    margin: 0 0 0 8px;
  }
`;

export default Tournament;