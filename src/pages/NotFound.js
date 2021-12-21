import React  from "react";
import styled from "styled-components";


const NotFound = () => {

  return(
    <Wrap>
      <p>Page Not Found</p>
      <a href="/" className="btn btn-primary btn-lg">Return</a>
    </Wrap>
  )
}
export default NotFound;

const Wrap = styled.div `
  
`;