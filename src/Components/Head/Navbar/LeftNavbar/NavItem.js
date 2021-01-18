import React from 'react';
import styled from "@emotion/styled";

function NavItem({name}) {
    const Ul =styled.ul`
    list-style:none;
    `
    const Li =styled.li`
    color:white;
    font-weight:bold;
    `
    const Text=styled.a` 
        color:white;
        text-decoration:none;   
    `


    // style
    return (
        <div>
          <Ul>
              <Li><Text href="#">{name}</Text></Li>
          </Ul>
        </div>
    );
}

export default NavItem;