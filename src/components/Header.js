import React from "react";
import styled from "styled-components";
import logo from "./images/logo.webp";



const Header = (props) => {

  return(
    <Wrapper>
      <div className="wrap-di">
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">Login </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Mail</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Repository</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">OER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">DNA Learning Center</a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link" href="/">NYSC</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">info@gouni.edu.ng   | 09134273215 | 09121963049 | 07061756730</a>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>
      <div className="logo-div">
        <img className="img-fluid" src={logo} alt="GoUni logo" />
        <div className="_links_">
          <div className="link-item">
            <p>About Us</p>
            <p className="lead">Our History</p>
          </div>
          <div className="link-item">
            <p>Institutional Collaborations</p>
            <p className="lead">Erasmus programes and Partners</p>
          </div>
          <div className="link-item">
            <p>Admissions</p>
            <p className="lead">Make GOUNI your 1st choice</p>
          </div>
          <div className="link-item">
            <p>Publications</p>
            <p className="lead">Research and Study</p>
          </div>
          <div className="link-item">
            <p>Academics</p>
            <p className="lead">Faculties</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Header;

const Wrapper = styled.div `
  .wrap-div{
    background: #179BD7;
    text-transform:uppercase;
    padding:0 40px;

    @media screen and (max-width:768px){
      padding: 5px;
    }

    ul{
      color:#cacbcc;
      li{
        display: inline-block;
        padding:5px;
        margin:10px 10px 0 10px;
        cursor: pointer;
        @media screen and (max-width:768px){
         
          font-weight:500;
          margin:0;
        }

        @media screen and (max-width:480px){
          font-weight:400;
          font-size:12px;
        }

      }
      li:hover{
        color:#fff !important;
      }

      .info{
        margin-left:15% !important;
        font-size:12px;
        color:#fff !important;
        cursor: default !important;

        @media screen and (max-width:768px){
          margin-left:0 !important;
        }

      }
    }
  }
  .logo-div{
    background:#253B80;
    padding:30px 40px;
    display:flex;
    justify-content:space-between;
    @media screen and (max-width:768px){
      padding:20px 5px;
    }

    ._links_{
      display:flex;
      padding:3px;

      @media screen and (max-width:768px){
        display:none;
      }
      .link-item{
        margin:0 10px;
        p{
          color:#fff;
          margin:0;
          font-size:16px;
          font-weight:700;
        }
        p.lead{
          font-size:14px !important;
          color:#c4c4c4;
        }
      }
    }
  }
`