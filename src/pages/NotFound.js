import React  from "react";
import styled from "styled-components";
import images from "../components/images";


const NotFound = () => {

  return(
    <Wrap >
      <div className="text-center wrapper">
        <img className="img-fluid " src={images.error404} alt="404 error"/>
        <br/>
        <a href="/" className="btn btn-lg">Return to Home page</a>
      </div>
    </Wrap>
  )
}
export default NotFound;

const Wrap = styled.div `
  .wrapper{
    background:#241D44;
    color:#fff;
    height:100vh;

    img{
      width:40%;
    }
    a{
      padding:5px 25px;
      border:2px solid #fffc;
      color:#fff;
      margin:10px 0;
      cursor: pointer;
    }
  }
`;