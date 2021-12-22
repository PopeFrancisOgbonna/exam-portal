import React from "react";
import styled from "styled-components";
import { Route,Link, Switch } from "react-router-dom";
import images from "../images";
import UserHome from "./UserHome";
import Registration from "./Registration";
import Exam from "./Exam";
import Result from "./Result";



const UserDashboard = () => {

  const user ="Pope Francis";
  return(
    <Wrapper className="container-fluid">
      <div className="header-div">
        <p>Welcome {user}</p>
        <Link to="/" className="text-danger font-weight-bold logout">Logout</Link>
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/user/dashboard">
          <img className="img-fluid mr-2" width="45px" src={images.logo2} alt="" />
          E-exam portal
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/user/dashboard">Home </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/user/dashboard/exam/register">Register Course</Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link " to="/user/dashboard/exam" >Take Exam</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/user/dashboard/exam/result" >View Result</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="">
        <Switch>
          <Route exact path="/user/dashboard">
            <UserHome />
          </Route>
          <Route exact path="/user/dashboard/exam/register">
            <Registration />
          </Route>
          <Route exact path="/user/dashboard/exam">
            <Exam />
          </Route>
          <Route exact path="/user/dashboard/exam/result">
            <Result />
          </Route>
        </Switch>
      </div>
    </Wrapper>
  )
}
export default UserDashboard;

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