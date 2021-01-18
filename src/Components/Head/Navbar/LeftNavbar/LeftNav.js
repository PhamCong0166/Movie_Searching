import React from "react";
import NavItem from "./NavItem";
import styled from "@emotion/styled";

function LeftNav(props) {
  const LeftNav =styled.div ` 
    display:flex;
    align-items:center;
  `

  const Img = styled.img`
  width: 112px;
  height: 28px;
`;

  return (
    <LeftNav>
      <Img
        className="logo"
        src="https://xemphimz.plus/static/skin/logo-full.png"
      />
      <NavItem name={"Phim Bộ"}></NavItem>
      <NavItem name={"Phim Lẻ"}></NavItem>
      <NavItem name={"FAQ"}></NavItem>
    </LeftNav>
  );
}

export default LeftNav;
