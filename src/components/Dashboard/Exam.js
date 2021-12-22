import React, { useState } from "react";
import styled from "styled-components";


const Exam = () =>{

 const [courseCode, setCourseCode] = useState("");
 const [error, setError] = useState("");
 const [start, setStart] = useState(false);
 let next =1;

 const startExam = () =>{
  setStart(true);
   if(courseCode ===""){
     setError("Please Enter Course Code to get started.");
     setStart(false);
     return;
   }
 }


  return(
    <Wrap>
      <div className="container">
        
        { start !== true ?
          <>
            <p className="text-danger text-center mt-5">{error}</p>
            <div className="input-group my-3 mx-auto w-25">
              <input type="text" className="form-control" placeholder="Enter Course Code" aria-label="Course-Code" 
                aria-describedby="exam-code" onChange={(e)=>setCourseCode(e.target.value)}
              />
              <div className="input-group-append">
                <span className="btn btn-secondary input-group-text" id="exam-code" onClick={() =>startExam()}>Start Exam</span>
              </div>
            </div>
          </> :
          <>
            <div className="questions-list my-3">
              <p className="text-center">1/5</p>
            </div>
            <div className="questions-div mb-4">
              <div className="row">
                <div className="col-md-5 col-sm-12">
                  <div className="quest">
                    <p>What is Force?</p>
                  </div>
                  
                </div>
                <div className="col-md-7 col-sm-12">
                  <div className="ans-div">
                    
                    <textarea className="form-control" rows="10" cols="10"></textarea>
                    { next !== 0 ?
                      <div className="w-25 mt-2 ml-auto">
                          <button className="btn btn-block btn-success">Next</button>
                      </div>:
                      <div className="mt-1">
                        <button className="btn btn-block btn-info font-weight-bold">Submit</button>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </Wrap>
  )
}
export default Exam;

const Wrap = styled.div `

 .questions-list{
   background:#ccc;
   padding:20px 5px;
   font-size:28px;
   font-weight:700;
 }
 .questions-div{
  background:#dedede;

  .quest{
    background:rgb(192, 191, 191);
    padding:10px;
    margin:10px;
    font-size:1.2rem;
    height:80%;
  }
  .ans-div{
    background:rgb(192, 191, 191);
    padding:10px;
    margin:10px;

    div textarea:focus{
      outline:none;
    }
  }
 }
`;