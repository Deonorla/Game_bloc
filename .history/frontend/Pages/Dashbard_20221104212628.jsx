import { motion } from "framer-motion";
import styled from "styled-components";
import CardView from "../Components/CardView";
import Header from "../Components/Header";
import HomeSlider from "../Components/HomeSlider";
import SearchBox from "../Components/SearchBox";
import Hub from "../Components/Hub";
import { BiBell } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { HiCollection } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import user from "../assets/u.png";
import virtual from "../assets/virtual.jpg";
import Chat from "../Components/Chat";

const Dashboard = ({ userName }) => {
  return (
    <Wrapper>
      <Nav>
        <AvatarContainer>
          <img src={virtual} alt="avatar" />

          <ColorContainer>
            <Red>
              <img src={user} alt="" />
            </Red>
            <Yellow>
              <h4>{userName}</h4>
            </Yellow>

            <Green>
              {/* <div>
                <h4>Subscribers</h4>
                <p>200K</p>
              </div> */}
            </Green>
            <button>Start a Tournament</button>
          </ColorContainer>
        </AvatarContainer>

        <Enclosed>
          <MenuBox>
            <div>
              <h4>Home</h4>
              <Messages />
            </div>
            <div>
              <h4>Tournaments</h4>
              <Library />
            </div>
            <div>
              <h4>Friends</h4>
              <Favourite />
            </div>
            <div>
              <h4> Games</h4>
              <Friends />
            </div>
            <div>
              <h4>Tornaments</h4>
              <Messages />
            </div>
          </MenuBox>
        </Enclosed>
      </Nav>

      {/* <Container>
   
         <HomeSlider/>
         <SearchBox/>
         <CardView/>
         <Hub/>
        </Container> */}

      {/* 
       <Chathome>
        <Chat/>
       </Chathome> */}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Nav = styled.div`
  display: none;
  @media (min-width: 686px) {
    position: fixed;
    display: flex;
    height: 100vh;
    flex-direction: column;
    top: 3.5rem;
    margin-left: 1rem;
  }
`;

const Container = styled.div`
  @media (min-width: 686px) {
    margin-left: 13.5rem;
    margin-top: 1rem;
  }
`;

const AvatarContainer = styled(motion.div)`
  display: none;
  @media (min-width: 686px) {
    display: flex;
    flex-direction: column;
    margin: 1rem 0.5rem;
    background: #35356b;
    border-radius: 12px;
    position: relative;
    width: 10vw;

    img {
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      cursor: pointer;
      width: 100%;
      height: 100px;
    }
  }
`;

const ColorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  button {
    border: none;
    margin-top: 1rem;
    border-radius: 9999px;
    padding: 0.3rem 1rem;
    background-color: #3f3f6e;
    color: #6365bf;
    font-size: 12px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 29%) 5px 26px 36px 10px,
      rgb(0 0 0 / 53%) 10px 16px 10px -10px;

    &:hover {
      transform: scale(1.05);
      translate: 5s ease in;
    }
  }
`;

const Bell = styled(BiBell)`
  color: #6365bf;
  font-size: 26px;
  margin-top: 1.2rem;
  cursor: pointer;
`;

const Settings = styled(AiOutlineSetting)`
  margin-top: 1.2rem;
  color: #6365bf;
  font-size: 26px;
  cursor: pointer;
`;

const Red = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin: 0 auto;
  top: 4rem;
  img {
    width: 3rem;
    height: 3rem;
    padding: 0;
    margin: 0 0.5rem;
  }
`;

const Yellow = styled(motion.div)`
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  h4 {
    color: #6365bf;
    font-size: 14px;
    margin: 1.5rem 0 0 0;
  }
  p {
    color: #6365bf;
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
  }
`;

const Green = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;

    h4 {
      margin: 0;
      color: #6365bf;
      font-size: 12px;
    }

    p {
      font-size: 12px;
      color: #6365bf;
      margin: 0;
    }
  }
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #35356b;
  padding: 0.7rem 1.2rem;
  border-radius: 12px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &:hover {
      transform: scale(1.05);
    }
  }

  h4 {
    color: #6365bf;
    font-size: 12px;
    margin: 0.4rem 0.3rem 1.2rem 0;
    padding-top: 0.4rem;
    cursor: pointer;
  }
`;

const Enclosed = styled.div`
  height: 19rem;
  width: 12rem;
  border-radius: 12px;
`;

const Library = styled(HiCollection)`
  font-size: 21px;
  color: #6365bf;
`;
const Friends = styled(FaUserFriends)`
  font-size: 21px;
  color: #6365bf;
`;
const Messages = styled(AiFillMessage)`
  font-size: 21px;
  color: #6365bf;
`;
const Favourite = styled(AiTwotoneStar)`
  font-size: 21px;
  color: #6365bf;
`;

export default Dashboard;
