import React from "react";
import styled from "styled-components";
import { Route,Link, Switch } from "react-router-dom";
import images from "../images";
import Result from "../StudentDashboard/Result";
import Home from "./Home"
import ExamQuestions from "./ExamQuestions";



const StaffDashboard = () => {

  const user ="Pope Francis";
  return(
    <Wrapper className="container-fluid">
      <div className="header-div">
        <p>Welcome {user}</p>
        <Link to="/" className="text-danger font-weight-bold logout">Logout</Link>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/user/dashboard">
          <img className="img-fluid mr-2" width="45px" src={images.logo2} alt="" />
          E-exam portal
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/staff/dashboard">Home </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/staff/dashboard/exam/register">Register Course</Link>
            </li> */}
            
            <li className="nav-item">
              <Link className="nav-link " to="/staff/dashboard/exam" >Publish Exam Questions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/staff/dashboard/exam/result" >View Result</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="">
        <Switch>
          <Route exact path="/staff/dashboard">
            <Home />
          </Route>
          {/* <Route exact path="/staff/dashboard/exam/register">
            <p>Add course</p>
          </Route> */}
          <Route exact path="/staff/dashboard/exam">
            <ExamQuestions />
          </Route>
          <Route exact path="/staff/dashboard/exam/result">
            <Result />
          </Route>
        </Switch>
      </div>
    </Wrapper>
  )
}
export default StaffDashboard;

const Wrapper = styled.div `
  .header-div{
    color:#fff;
    background:#003E77;
    display:flex;
    justify-content:flex-end;
    padding:10px;
    @media screen and (max-width:600px){
      justify-content: space-between;
    }
    
    .logout{
      border:0.5px solid #fff;
      height:max-content;
      padding:5px 10px;
      margin:0 25px;
      border-radius:11px;
      cursor:pointer;
      text-decoration:none;

      @media screen and (max-width:600px){
        margin: 0 5px;
      }
    }
  }
  
`;