import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

function Search(props) {
  // const Input = styled.input`
  //   outline: none;
  //   padding: 10px 5px 10px 15px;
  //   background: #0b1c2d;
  //   color: white;
  //   font-size: 15px;

  //   margin-right: 120px;
  //   border-radius: 50px;
  //   border: 1px solid white;
  // `;

  const { onGetValue } = props;
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(e) {
    const formValue =e.target.value;
    setSearchTerm(e.target.value);

   
  }
  function handleSubmitChange(e)
  {
    e.preventDefault();
    onGetValue(searchTerm);
  }

  // function getSubmit(e)
  // {
  //   e.preventDefault();
  //   enterSubmit(e)
  // }
  return (
    <div>
      <form onSubmit={handleSubmitChange}>
        <input className="search"
          onChange={handleSearchTermChange}
          value={searchTerm}
          type="search"
          placeholder="Search...."
         
        />
     </form>
    </div>
  );
}

export default Search;
