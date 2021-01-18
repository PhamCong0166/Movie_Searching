import React,{useState} from "react";
import styled from "@emotion/styled";
import LeftNav from "./LeftNavbar/LeftNav";
import Search from "./RightNav/search";

function Navbar(props) {

   const Navbar = styled.div`   
        display:flex;
        align-items:center;
        padding-left:40px;
       width:100%;
       justify-content:space-between;
   `
   const {onGetValue} = props;



  return (
    <Navbar>
        <LeftNav></LeftNav>
        <Search  onGetValue={onGetValue}></Search>
    </Navbar>
  );
}

export default Navbar;
