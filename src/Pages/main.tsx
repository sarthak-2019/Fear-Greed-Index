import { useEffect, useState } from "react";
import Header from "../Components/header/header";
import styled from "styled-components";
import AOS from "aos";
import Skeleton from "../Components/skeleton/Skeleton";
import Cards from "../Components/cards/cards";
import Meter from "../Components/Meter/Meter";
import Tabs from "./../Components/Tab/Tab";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  @media only screen and (max-width: 784px) {
    overflow: auto;
  }
`;
const Container1 = styled.div`
  margin-top: 100px;
  height: 220px;
  @media only screen and (max-width: 784px) {
    margin-top: 30px;
  }
`;
const Main = ({ loading }: any) => {
  const [value, setValue]: any = useState("1");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container data-aos="fade-up">
      <Header />
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Container1>
            <Meter value={value} setValue={setValue} />
          </Container1>
          <Tabs value={value} setValue={setValue} />
          <Cards />
        </>
      )}
    </Container>
  );
};

export default Main;
