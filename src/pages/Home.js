import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import images from "../components/images";




const Home = (props) =>{
  
  const [active, setActive] = useState(1);
  return(
    <Wrap className="container-fluid">
      <Header />
      <div className="section-1">
        <div className="article-div">
          <div className="article">
            <img src={images.vc} alt=""/>
            <div>
              <h5 className="mt-2">Meet Godfrey Okoye University Pro Chancellor, Prof. Nwachukwu Christian Okeke as he celebrates his 80th birthday (octogenarian).</h5>
              <p className="mt-4">
                Christian Nwachukwu Okeke born on Dec. 18, 1941, from Enugu State is a Professor of International Law, Jurisprudence and Comparative Law. He is the Director of Sompong Sucharitkul Center for Advanced International Legal Studies at Golden Gate University School of Law, San Francisco California. He is also the Director of LL.M. and S.J.D.
              </p>
              <button className="btn btn-sm btn-primary mt-2">Read more...</button>
            </div>
          </div>
          <hr/>
          <div className="article">
            <img src={images.groupPix} alt=""/>
            <div>
              <h5 className="mt-2">Management of Godfrey Okoye University, Enugu pay Christmas visits to Bishops Catholic Diocese of Enugu</h5>
              <p>
                The management of Godfrey Okoye University, Enugu has been commended for discovering talented youths and empowering them with the required skills that make them useful members of the society.The Bishop, Catholic Diocese of Enugu, Most Rev. Dr Callistus Onaga made remark while receiving
              </p>
              <button className="btn btn-sm btn-primary mb-4">Read more...</button>
            </div>
          </div>
        </div>
        {/* <img src={banner} alt="School Banner" /> */}
      </div>
      <div className="section-2">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <h2 className="mb-4">Online learning</h2>
            <img className="online-pix img-fluid" src={images.elearning} alt="" />
            <p>Our courses are designed to bring the classroom to you. 
              Join Our 4752 Happy Students Today!
            </p>
            <button className="btn btn-outline-light">Start Learning</button>
            <img className="img-fluid mt-3" src={images.flayer} alt="" />
          </div> 
          <div className="col-md-3 col-sm-12">
            <h2 className="mb-4">Group of Institutions</h2>
            <div>
              <button className="btn btn-outline-light btn-lg" id="text">IEcE - Institute of Ecumenical Education</button>
              <button className="btn btn-outline-light btn-lg">Secondary School</button>
              <button className="btn btn-outline-light btn-lg">Nursery and Primary School</button>
            </div>
            <div className="mt-4">
              <h5>Certificate Programe</h5>
              <ul>
                <li>NANNY AND CONTINUING EDUCATION</li>
                <li>Scholars Centre For Commerce & Industry, Gouni-Scci</li>
              </ul>
            </div>
            <div>
              <h4>GOUNI Scholarship Scheme</h4>
              <p>Are you looking for University Education without school fees, then join Godfrey Okoye University, 
                Enugu and educate yourself free through Godfrey Okoye University Scholarship Scheme. 
                <button className="btn btn-light text-primary my-2">Apply Now!!</button>
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <h2 className="mb-4">Admissions</h2>
            <div>
              <h5>Make Godfrey Okoye University your 1st Choice!!!</h5>
              <button className="btn btn-outline-light my-3">2021/2022 Admission</button>
              <button className="btn btn-outline-light my-3">List of Courses</button>
            </div>
            <div className="my-5">
              <h2 className="mb-4">TUITION AND OTHER PAYMENTS</h2>
              <img className="img-fluid mt-2" src={images.fees} alt="" />
            </div> 
          </div>
          <div className="col-md-3 col-sm-12">
            <h2 className="mb-4">Quick Links</h2>
            <div>
              <ul className="q-link">
                <li>First Semester Lecture Time table</li>
                <li>Online Learning</li>
                <li>Portal Login</li>
                <li>2021/2022 Admission</li>
                <li>List of Courses</li>
                <li>Make Payment</li>
                <li>Post Graduate Online Application Portal</li>
                <li>Student Service</li>
                <li>Academic Calendar 2021/2022</li>
                <li>Downloads</li>
                <li>Repository</li>
                <li>PG School</li>
                <li>SIWES</li>
                <li>Student Mail</li>
                <li>NYSC</li>
                <li>106.9 GOUNI Radio</li>
                <li>Africa Uninet</li>
                <li>Project ESME</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3 my-5">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="bg-primary p-4 az">
              <h2>A-Z <br/>Courses</h2>
              <p className="lead">Our courses are innovative and grounded in the real world</p>
              <button className="btn btn-outline-light ">A-z Courses</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="img-container">
              <img className="img-fluid" src={images.account} alt="" />
            
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="img-container">
              <img className="img-fluid" src={images.bio} alt="" />
              
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="img-container">
              <img className="img-fluid" src={images.architect} alt="" />
              
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="img-container">
              <img className="img-fluid" src={images.banking} alt="" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="img-container">
              <img className="img-fluid" src={images.biochem} alt="" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="img-container">
              <img className="img-fluid" src={images.biology} alt="" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="img-container">
              <img className="img-fluid" src={images.biotech} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2 className="text-primary">Why Choose Us?</h2>

            <div className="accordion" id="gouniAccordion">
              <div className="card my-3">
                <div className={ active ===1?"card-header bg":"card-header"} id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" 
                      aria-expanded="true" aria-controls="collapseOne" onClick={()=>setActive(1)}>
                      Academics
                    </button>
                  </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#gouniAccordion">
                  <div className="card-body">
                    <ul className="p-2">
                      <li>Integration of learning and character formation</li>
                      <li>Over 100 scholarship opportunity (under the GO Uni Legal project)</li>
                      <li>Well-structured academic programmes</li>
                      <li>Learning Integrated with practical experience</li>
                      <li>Learning skills that will make you employable</li>
                      <li>Highly qualified staff</li>
                      <li>Exchange programmes with foreign partner universities</li>
                      <li>Our students go for NYSC the year they graduate</li>
                      <li>Well-equiped E-Library</li>
                      <li>Elaborate mentorship programme</li>
                      <li>Friendly staff</li>
                      <li>Effective guidance and counseling</li>
                      <li>Modern library and laboratory facilities</li>
                      <li>Tutoring services</li>
                      <li>GO Uni Radio programmes and lessons</li>
                      <li>Daily prayers and blessings</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className={active ===2?"card-header bg":"card-header"} id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-transparent btn-block text-left collapsed" type="button" data-toggle="collapse" 
                      data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={()=>setActive(2)}>
                      Environment
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#gouniAccordion">
                  <div className="card-body">
                   <ul>
                     <li>Cult-free environment</li>
                     <li>Serene learning environment</li>
                     <li>24 Hours Security on Campus</li>
                     <li>Comfortable Accommodation with good Electric/Water Supply</li>
                   </ul>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className={active ===3?"card-header bg":"card-header"} id="headingThree">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-transparent btn-block text-left collapsed" type="button" 
                      data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={()=>setActive(3)}>
                      Technology
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#gouniAccordion">
                  <div className="card-body">
                    <ul>
                      <li>ICT-Enabled University</li>
                      <li>Blended Learning</li>
                      <li>24 Hours Campus WI-Fi</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className={active ===4?"card-header bg":"card-header" }id="headingFour">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-transparent btn-block text-left collapsed" type="button" data-toggle="collapse" 
                      data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onClick={()=>setActive(4)}>
                      Awards
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#gouniAccordion">
                  <div className="card-body">
                    <ul>
                      <li>Best Campus Radio</li>
                      <li>Leading Private University in the South-East</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card my-3">
                <div className={active ===5?"card-header bg":"card-header"} id="headingFive">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-transparent btn-block text-left collapsed" type="button" data-toggle="collapse" 
                      data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" onClick={()=>setActive(5)}>
                      GO UNI International Partners
                    </button>
                  </h2>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#gouniAccordion">
                  <div className="card-body">
                    <ul>
                      <li>UNIVERSITY OF STELLENBOSCH BUSINESS SCHOOL</li>
                      <li>WESTF ALISCHE WILHELMS-UNIVERSITAT</li>
                      <li>MUNSTER</li>
                      <li>BIRMINGHAM CITY UNIVERSITY</li>
                      <li>BOWIE STATE UNIVERSITY</li>
                      <li>TECHNOLOGY ARTS SCIENCES TH KOLN</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            
            
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="dflex">
              <h2>Blog</h2>
              <button className="btn details">Visit Blog</button>
            </div>
            <div className="dflex">
              <div>
              <img className="img-fluid" src={images.vc} alt="" />
              </div>
              <div className="text-div">
                <hr/>
                <h5>Meet Godfrey Okoye University Pro Chancellor, 
                  Prof. Nwachukwu Christian Okeke as he celebrates his 80th 
                  birthday (octogenarian).
                </h5>
                <p>
                  Christian Nwachukwu Okeke born on Dec. 18, 1941, from 
                  Enugu State is a Professor of International Law, Jurisprudence 
                  and Comparative Law. He is the Director of Sompong Sucharitkul 
                  Center for Advanced International Legal Studies at Golden Gate 
                  University School of Law, San Francisco California. He is also 
                  the Director of LL.M. and S.J.D. Programs in […]
                </p>
                <button className="btn details">Details</button>
              </div>
            </div>

            <div className="dflex">
              <div>
                <img className="img-fluid" src={images.groupPix} alt="" />
              </div>
              <div className="text-div">
                <hr/>
                <h5>
                  Management of Godfrey Okoye University, 
                  Enugu pay Christmas visits to Bishops Catholic Diocese of Enugu
                </h5>
                <p>
                  The management of Godfrey Okoye University, 
                  Enugu has been commended for discovering talented youths and 
                  empowering them with the required skills that make them useful 
                  members of the society.The Bishop, Catholic Diocese of Enugu, 
                  Most Rev. Dr Callistus Onaga made remark while receiving the 
                  Vice Chancellor of the university, Rev. Fr. Prof. Christian 
                  Anieke and […]
                </p>
                <button className="btn btn-outline-light">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrap> 
  )
}
export default Home;

const Wrap = styled.div `

  .section-1{
    background: url(${images.banner});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;


    .article-div{
      background: #fff;
      width:40%;
      margin: 0 8%;

      @media screen and (max-width:768px){
        width:98%;
        margin:0 2%;
      }
    }
    .article{
      display:flex;
      @media screen and (max-width:768px){
        flex-direction: column;
      }
      
      img{
        width: 250px;
        height:250px;
        margin:5px;
        @media screen and (max-width:768px){
          width:90%;
          height:auto;
          margin:0 auto;
        }
      }
      div{
        padding:6px;
      }
    }
  }

  .section-2{
    background:#179BD7;
    padding:25px;
    color:#fff;
    
    #text{
      font-size: 14px !important;
      font-weight:bold;
    }

    .q-link{
      list-style:none;

      li{
        margin:10px 0;
        font-size:18px;
        font-weight:600;
        cursor:pointer;
      }
    }
  }
  .section-3{
    .az{
      height:100%;
    }
    .img-container{
      position: relative;
    }
    .img-container img{
      transition: all ease-out 2s;
    }
    .img-container img:hover{
      transform:scale(1.1);
    }
    
  }
  .section-4{
    .bg{
      background:#179BD7;
    }
    .bg button{
      color:#fff !important;
      font-size:24px;
      font-weight:600;
      text-decoration:none;
    }
    ul{
      padding:10px;
    }

    .dflex{
      margin-top:10px;
      display:flex;
      justify-content:space-between;
      gap:5px;

      @media screen and (max-width:768px){
        flex-direction:column;
      }
      div img{
        width:650px;
        height: auto;
        @media screen and (max-width:768px){
          width:95%;
        }
      }
      .text-div{
        padding: 10px;
        width:80%;
        @media screen and (max-width:768px){
          width:100%;
        }
      }

      button{
        border:2px solid #ccc;
        padding: 5px 35px;
        color:#000;
        font-weight:600;
        transition: all 2s ease;
      }
      button:hover{
        background:#0077b6;
        color:#fff;
        border:none;
      }
    }
  }
`;