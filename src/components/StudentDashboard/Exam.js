import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import api from "../middleware/baseUrl";


const Exam = () =>{

  const appApi = api.localUrl;
 const [courseCode, setCourseCode] = useState("");
 const [error, setError] = useState("");
 const [start, setStart] = useState(false);
 let [next, setNext] = useState(0);
 let [isRegistered, setIsRegistered] = useState(false);
 const [exam, setExam] = useState([]);
 const [answer, setAnswer] = useState("");
 const [totalScore, setTotalScore] = useState([]);

 const regno = sessionStorage.getItem('regNo');
 const name = sessionStorage.getItem('User');
 
 //Function to get exams for a specific course
  async function getExams (course,reg){
    const dbData = await Axios.get(`${appApi}/questions/${course}`)
    .then((res) =>{
      console.log(res.data);
      return res.data
    })
    .catch(e => console.log(e));
    return dbData;
  }
  //Check if student registered for course
  async function confirmCourseReg (){
    
    const corseInfo = await Axios.get(`${appApi}/courses/student/${courseCode}?&regno=${regno}`)
    .then((res) =>{
      console.log(res.data)
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
    const registered = await confirmCourseReg();
    console.log(registered);
    if(registered.length){
      let student =registered.filter((students) =>{
        return students.code.toLowerCase() === courseCode.toLowerCase() && 
        students.reg_no.toLowerCase() === regno;
      });
      console.log(student)
      if(student.length){setIsRegistered(true);}
    }
    console.log(questions);
  }

  const studentScore = () => {
    let t = 0;
    console.log(`the score is ${totalScore}`)
    totalScore.forEach(value => {
      // console.log(value);
      t += value;
      
    });
    return  (t/(exam.length * 5)) * 100 + '%';
  }
  const submitAnswer = () => {
    let keywords = exam[next].keyword;
    let score = 0;
    
    for (let index = 0; index < keywords.length; index++) {
      if(answer.toLocaleLowerCase().includes(keywords[index])){
        score += ((100/keywords.length)/100)*5;
      }
    }
    setTotalScore(totalScore =>([...totalScore, score]));
    console.log(score);
    setAnswer("");
    console.log(totalScore)
  }
  let submited = false;
  const finish = () =>{
    
    if(submited === true){
      alert("you've submitted already!");
      return;
    }
    const result = studentScore();
    console.log(result);
    submited = true;

    const uploadScore = async () => {
    
      let payload ={
        name: name,
        regNo: regno,
        course: exam[0].course_title,
        code: exam[0].course_code,
        score: result
      };
      console.log(payload);
      console.log(payload.code)
      const recordExist = await Axios.get(`${appApi}/results/${payload.code}`);
      
      console.log(recordExist)
      let studentResult =recordExist.data.filter((students) =>{
        return students.course_code.toLowerCase() === courseCode.toLowerCase() && 
        students.reg_no.toLowerCase() === regno
      });
      
      if(studentResult.length){
        alert("You've written this exam previously. Contact the lecturer for a rewrite.")
        return;
      }
      const saved = await Axios.post(`${appApi}/result/upload`,payload);
      console.log(saved)
      if(saved.data.length){
        alert("Congratulations! Your submission was successful.");
      }
      else{
        alert("oops! Something went wrong while submitting your answer. Contact IT department.")
      }
    }

    uploadScore();
  }
 

  const handleNext =() =>{
    console.log(`next value ${next}`)
     submitAnswer();
    if(next > exam.length){
      setNext(next+1);
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
                <h4 className="text-center my-3">{exam[0].course_title} ({exam[0].course_code}) Examination</h4>
                <p className ="text-center">Note: Ensure you attemmpt all questions</p>
                <div className="questions-list my-3">
                  <p className="text-center">{next !== exam.length? next +1 : next}/{exam.length}</p>
                </div>
                <div className={!isRegistered?"mb-4":"questions-div mb-4"}>
                  {!exam.length ? 
                    <p>Loading...</p> :
                    <>
                      <div className="row">
                        <div className="col-md-5 col-sm-12">
                          <div className="quest">
                           {next < exam.length?<p>{exam[next].question}</p>: <p>{"No more questions."}</p>}
                          </div>
                          
                        </div>
                        <div className="col-md-7 col-sm-12">
                          <div className="ans-div">
                            
                            <textarea className="form-control" rows="10" cols="10"
                              value={answer}
                              onChange={(e)=>setAnswer(e.target.value)}
                            ></textarea>
                            { (next) < exam.length ?
                              
                              <div className="w-25 mt-2 ml-auto">
                                <button className="btn btn-block btn-success" onClick={()=>handleNext()}>Next</button>
                              </div>:
                              <div className="mt-1">
                                <button className="btn btn-block btn-info font-weight-bold"
                                  onClick={()=>finish()}
                                >Submit</button>
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