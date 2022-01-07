import React from "react";
import styled from "styled-components";
import images from "../images";



const Home = () => {

  return(
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h1 className="mt-3">Impact of <span className="product">Online Exam Software</span></h1>
            <p>An online examination platform ensures a fool-proof examination 
              process with its in-built features such as enabling controllers of 
              examination to plan the grading scheme, candidate and evaluator 
              slotting, AI-enabled invigilation mechanisms that ensures a 
              cheating-free environment and automated evaluation that able quick 
              result declaration.
            </p>
            <button className="btn btn-lg product-cta">Read More</button>
          </div>
          <div className="col-md-4 col-sm-12">
            <img className="img-fluid d-block w-100" src={images.student1} alt="student"/>
          </div>
        </div>
      </div>
      <div className="banner">
        <img className="img-rounded" src={images.student2} alt="student" />
        <div>
          <h1>Flexible and Efficient Marking</h1>
          <p>Configure your assessment workflows and test settings, and 
            extend functionality. With precise annotations and criteria-based 
            marks, tailored by workflow configuration allowing for double-blinded 
            marking and more.
          </p>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1>486+</h1>
            <p>Registered Students</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h1>3521+</h1>
            <p>Questions</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h1>2476+</h1>
            <p>Generated Results</p>
          </div>
        </div>
      </div> */}
    </Wrapper>
  )
}
export default Home;

const Wrapper = styled.div `
  .product{
    color:#b44bf1;
    font-weight:800;
  }
  p{
    font-size:20px;
  }
  .product-cta{
    background:#b44bf1;
    color:#fff;
    padding:10px 85px;
  }
  .banner{
    background:#a5a3a577;
    margin:25px 0 0 0;
    display:flex;
    align-items:center;

    p{
      font-size:24px;
      font-weight:400;
    }
  }
`;