import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
  const Header = styled.div`
    width: 100%;
    height: 80px;
    background: #06121e;
    display:flex;
    align-items:center; 
  `;
  const { onGetValue} = props;

  return (
    <Header>
      <Navbar  onGetValue={onGetValue}></Navbar>

    </Header>
  );
};

export default Header;
