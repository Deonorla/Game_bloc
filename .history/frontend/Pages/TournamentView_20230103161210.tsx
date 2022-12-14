import React from 'react';
import styled from "styled-components";
import check from "../assets/check.png";
import dollar from "../assets/dollar.png";
import money from "../assets/money.png";
import mode from "../assets/mode.png";

const TournamentView = () => {
  return (
      <Container>
          <GameImg>
              <Img style={{ backgroundImage: `url(https://w0.peakpx.com/wallpaper/631/321/HD-wallpaper-call-of-duty-mobile-2019.jpg)` }} />
              <AvatarContainer>
                  <AvatarWrapper>
                      <Avatar src="https://w0.peakpx.com/wallpaper/631/321/HD-wallpaper-call-of-duty-mobile-2019.jpg" alt=""/>
                      <Details>
                       <h4>Call of Duty War-zone</h4>
                       <UserName>
                           <img src={check} alt="" />
                           <h3> Deonatricks </h3>
                        </UserName>
                      </Details>
                  </AvatarWrapper>
                  <SideDetails></SideDetails>
              </AvatarContainer>
          </GameImg>

          <GameMode>
             <ModeContainer>
                <img src={mode} alt="" />
               <div>
                  <p>Game Mode</p>
                  <p>$200</p>
               </div>
             </ModeContainer>

             <ModeContainer>
                <img src={money} alt="" />
                <div>
                  <p>Pool prize </p>
                  <p>$200</p>
                </div>
             </ModeContainer>

             <ModeContainer>
                <img src={dollar} alt="" />
                <div>
                 <p> Entry prize </p>
                  <p>$20</p>
                </div>
             </ModeContainer>

              <Button>
                   Join
              </Button>
          </GameMode>

          <About>
             <Heading>About</Heading>

              <Tags>
                <Tag1>Shooting</Tag1>
                <Tag2>Adventure</Tag2>
                <Tag3>Action</Tag3>
              </Tags>

              <Info>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Info>

          </About>

    </Container>
  )
}

const Container = styled.div`
margin-top: 4.5rem;
  width: 95%;
  flex-grow: 1;
  flex-shrink: 1;
  border-radius: 12px;
  @media (min-width: 1200px) {
    width: 60vw;

  }
`;

const GameImg = styled.div`
  border-radius: 12px;
  height: 25rem;
   background-color: #35356b;
`;

const Img = styled.div`
 width: 100%;
 height: 17rem;
 background-size: 100% 100%;
 border-top-right-radius: 12px;
 border-top-left-radius: 12px;
 background-repeat: no-repeat;
 background-position: center center;
`;

const AvatarContainer = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;


`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  h4{
    color: white;
    font-size: 1.4rem;
    margin: 1rem 0 0 1rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
 border-radius: 8px;
 width: 10rem;
 height: 10rem;
 margin: -4rem  0 0 1rem;
`;

const UserName = styled.div`
 margin: 1rem 0 0 1rem;
 display: flex;
 h3{
  color: white;
  font-size: 1rem;
  margin: 0 0 0 4px ;
 }
 img{
     width: 20px;
     height: 20px;
 }
`;


const SideDetails = styled.div`
`;

const GameMode = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: #35356b;
 margin-top: 2rem;
 border-radius: 8px;
 padding: 1rem;
 width: 96%;

`;

const ModeContainer =styled.div`
  display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     margin-left: 2rem;
   div{
      display: flex;
      flex-direction: column;
      p{
           color: white;
           font-size: .8rem;
           font-weight: 500;
           margin: .5rem 0 0 1rem;
         }
     }

   img{
    width: 40px;
    height: 40px;
   }

`;

const Button = styled.button`
   background-color: #41417c;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 2rem;
   color: white;
   font-size: 16px;
   border: none;
   width: fit-content;
   cursor: pointer;
   &:hover{
      scale: 1.03;
      background-color: #6365bf;
   }
`;

const About = styled.div`
 background-color: #35356b;
 border-radius: 12px;
 width: 96%;
 padding: 1rem;
 margin-top: 2rem;
`;

const Heading = styled.h4`
 color: white;
 font-size: 1.5rem;
 margin: 0;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag1 = styled.div`
  display: flex;
  color: white;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  background: #991ba5;
  border-radius: 9999px;
  padding: 0.3rem 0.7rem;
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
  padding: 0.3rem 0.7rem;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
  color: white;
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
  padding: 0.3rem 0.7rem;
  width: fit-content;
  margin: 1rem;
  color: white;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 1rem;
    margin: 0 0 0 8px;
  }
`;

const Info = styled.p`
 margin-left: 1rem;
 color: white;
 opacity: 0.7;
`;


export default TournamentView;