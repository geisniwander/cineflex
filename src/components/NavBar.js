import styled from "styled-components";

export default function NavBar() {
  return <Nav>CINEFLEX</Nav>;
}

const Nav = styled.div`
  width: 100%;
  height: 67px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c3cfd9;
  font-size: 34px;
  font-weight: 400;
  color: #e8833a;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
