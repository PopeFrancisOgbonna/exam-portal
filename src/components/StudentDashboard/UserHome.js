import React from "react";
import { FaEnvelopeOpenText, FaPhoneAlt, FaTrophy } from "react-icons/fa";
import styled from "styled-components";
import images from "../images";


const UserHome = () => {


  return(
    <Wrap >
      <div className="row ">
        <div className="col-md-6 col-sm-12">
          <div className="msg ">
            <img className="img-fluid mb-0"  src={images.guide} alt="" />
            <h4 className="mt-0">Examination Guidlines</h4>
            <p>To be elegible for any examination the student must ensure he/she has completed all 
              necessary payments and course registration.
            </p>
            <p>Coats, backpacks, bags, etc. must be placed as directed. Mobile phones, mp3 players, smartwatches and other electronic devices must be turned off and put away, and cannot be stored in coats or pockets.</p>
            <button className="btn btn-sm btn-outline-primary mb-3 font-weight-bold">Read More ...</button>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={images.slide1} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={images.enuguGoUNi} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={images.visit} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="card my-card my-4" >
        <div className="row no-gutters">
          <div className="col-md-5">
            <img src={images.student} className="card-img" alt="..."/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title">Library Access</h3>
              <p className="card-text">The libraries are open for all. <span className="link">See the opening hours and contact information.</span> </p>
              <p>Following new national corona regulations, GO-UNI reintroduces the one-meter rule. Mandatory use of face coverings when it is not possible to keep this distanse.
                Revised borrowing regulations for documents borrowed after 16th August 2021. The most significant change is that unresolved cases concerning unreturned items will be transferred to Kredinor.
                EZProxy is no longer available at GO-UNI. You need to connect via VPN to access the library's electronic resources off campus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3 bg-dark px-5 py-3 text-light">
        <div className="col-md-4 col-sm-12">
          <div className="wrapper d-flex">
            <FaPhoneAlt className="display-2 mr-2"/>
            <div>
              <h5>TECHNICAL SUPPORT IS AVAILABLE BY PHONE & MAIL 24/7</h5>
              <p className="mb-0 text-muted">Support Lines: 0806-911-1019,0806-882-0118,0706-166-3169</p>
              <p className="my-0 text-muted">Support E-Mail: Support@gouni.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="wrapper d-flex">
            <FaEnvelopeOpenText className="display-2 mr-2"/>
            <div>
              <h5>ALL OTHER QUESTIONS?</h5>
              <p className="text-muted">For any other question or inquiry, please submit using
                this form
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="wrapper d-flex">
            <FaTrophy className="display-2 mr-2"/>
            <div>
              <h5>TROUBLE GENERATING INVOICE OR MAKING PAYMENT??</h5>
              <p className="text-muted">Chat with us if you're experiencing problems generating invoice or making payment for the admission form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  )
}
export default UserHome;

const Wrap = styled.div `
  .msg{
    font-size:19px;
  }
  .my-card{
    background:#cccc;

    .card-body{
      padding:5% 15px;
      font-size:21px;
    }
  }
`;