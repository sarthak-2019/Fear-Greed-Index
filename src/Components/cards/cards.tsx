import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../App";
import Card from "./card";
const MainContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 500px) {
    height: auto;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 180px 180px;
  align-items: center;
  justify-content: center;
  gap: 22px;
  overflow-x: hidden;
  margin-left: 32px;
  @media only screen and (max-width: 784px) {
    grid-template-columns: 350px;
    display: flex;
    flex-direction: column;
  }
`;
const Cards = () => {
  const dataContext: any = useContext(DataContext);
  return (
    <MainContainer>
      <Container>
        <Card item={dataContext.data.fgi.now} key={1} time={"now"} />
        <Card
          item={dataContext.data.fgi.oneMonthAgo}
          key={2}
          time={"oneMonthago"}
        />
        <Card
          item={dataContext.data.fgi.oneWeekAgo}
          key={3}
          time={"oneWeekago"}
        />
        <Card
          item={dataContext.data.fgi.oneYearAgo}
          key={4}
          time={"oneYearAgo"}
        />
        <Card
          item={dataContext.data.fgi.previousClose}
          key={5}
          time={"previosClose"}
        />
      </Container>
    </MainContainer>
  );
};

export default Cards;
