import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 10px;
  padding-top: 110px;
`;

export const Navigation = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background: white;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Next = styled.div`
  background: green;
  height: 50px;
  width: 50px;
`;

export const Prev = styled.div`
  background: red;
  height: 50px;
  width: 50px;
`;

export const Card = styled.div`
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
