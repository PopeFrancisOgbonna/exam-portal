import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";


const Exam = () =>{

 const [courseCode, setCourseCode] = useState("");
 const [error, setError] = useState("");
 const [start, setStart] = useState(false);
 let [next, setNext] = useState(0);
 let [isRegistered, setIsRegistered] = useState(false);


 const [exam, setExam] = useState([]);
 //Function to get exams for a specific course
  async function getExams (course,reg){
    const dbData = await Axios.get(`http://localhost:3020/questions/${course}`)
    .then((res) =>{
      return res.data
    })
    .catch(e => console.log(e));
    return dbData;
  }
  //Check if student registered for course
  async function confirmCourseReg (reg){
    const corseInfo = await Axios.get(`http://localhost:3020/courses/student`)
    .then((res) =>{
      
      return res.data
    })
    .catch(e => console.log(e));
    return corseInfo;
  }

  const startExam = async () =>{
    setStart(true);
    if(courseCode ===""){
      setError("Please Enter Course Code to get started.");
      setStart(false);
      return;
    }
    const questions = await getExams(courseCode);
    if(!questions.length){
      setError(`${courseCode} examination is yet to be scheduled. Kindly check the exams time table for more Information.`);
      return;
    }
    setExam(questions);
    const registered = await confirmCourseReg("esut/2014/155200");
    console.log(registered);
    if(registered.length){
      let student =registered.filter((students) =>{
        return students.code.toLowerCase() === courseCode.toLowerCase() && 
        students.reg_no.toLowerCase() === "esut/2014/15520"
      });
      console.log(student)
      if(student.length){setIsRegistered(true);}
    }
    console.log(questions);
  }

  const handleNext =() =>{
    if(next === exam.length-1){
      return;
    }
    setNext(next + 1);
  }
 
  


  return(
    <Wrap>
      <div className="container">
        
        { start !== true || !exam.length ?
          <>
            <p className="text-danger text-center mt-5">{error}</p>
            <div className="input-group my-3 mx-auto search-bar" id="search-bar">
              <input type="text" className="form-control " placeholder="Enter Course Code" aria-label="Course-Code" 
                aria-describedby="exam-code" onChange={(e)=>setCourseCode(e.target.value)}
              />
              <div className="input-group-append">
                <span className="btn btn-secondary input-group-text" id="exam-code" onClick={() =>startExam()}>Start Exam</span>
              </div>
            </div>
          </> :
          <>
            {
              isRegistered !== true ? 
              <div className="text-center mt-5">
                <p>Sorry you are not elligible for this exam.</p>
                <button className="btn btn-lg btn-warning text-light" onClick={()=>{setError("");setStart(false)}}>Return</button>
              </div> :
              <>
                <div className="questions-list my-3">
                  <p className="text-center">{next +1}/{exam.length}</p>
                </div>
                <div className={!isRegistered?"mb-4":"questions-div mb-4"}>
                  {!exam.length ? 
                    <p>Loading...</p> :
                    <>
                      <div className="row">
                        <div className="col-md-5 col-sm-12">
                          <div className="quest">
                            <p>{exam[next].question}</p>
                          </div>
                          
                        </div>
                        <div className="col-md-7 col-sm-12">
                          <div className="ans-div">
                            
                            <textarea className="form-control" rows="10" cols="10"></textarea>
                            { (next) !== exam.length-1 ?
                              
                              <div className="w-25 mt-2 ml-auto">
                                  <button className="btn btn-block btn-success" onClick={()=>handleNext()}>Next</button>
                              </div>:
                              <div className="mt-1">
                                <button className="btn btn-block btn-info font-weight-bold">Submit</button>
                              </div>
                            }
                          </div>
                        </div>
                      </div>  
                    </>
                  }
                </div>
              </>
            }
          </>
        }
      </div>
    </Wrap>
  )
}
export default Exam;

const Wrap = styled.div `
  .search-bar{
    width:40%;
    @media screen and (max-width:600px){
      width:98% !important;
    }
  }
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