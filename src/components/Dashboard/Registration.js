import React,{useState} from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import images from "../images";
import { useForm } from "react-hook-form";


const Registration = () => {

  const [isLoading, setIsLoading] =  useState(false);
  const {register, handleSubmit, formState:{errors},} = useForm();

  const registerCourse = (data) =>{
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 3000);
  }

  return(
    <Wrap>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div class="mb-3">
            <img src={images.exampix} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Notice</h5>
              <p class="card-text">Candidates are requested to take photo identification for confirmation by the exam centre.
                Candidates who report late for an exam may be refused entry. Candidates are therefore recommended to arrive around 30 minutes early.
                Candidates will only be allowed exam support material to their seats.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <form onSubmit={handleSubmit(registerCourse)}>
            <p className="text-center font-weight-bold text-danger">* Ensure to Fill Course details correctly.</p>
              <div className="form-group">
                <label>Course Title:</label>
                <input className="form-control" type="text" name="courseTitle"
                  {...register('courseTitle',{required:true})}
                />
                {errors.courseTitle && <p className="text-danger">Course Title is required.</p>}
              </div>
              <div className="form-group">
                <label>Course Code:</label>
                <input className="form-control" type="text" name="code"
                  {...register('code',{required:true})}
                />
                {errors.code && <p className="text-danger">Course Code is required.</p>}
              </div>
              <div className="form-group">
                <label>Semester</label>
                <select className="form-control" {...register('semester',{required:true})} >
                  <option value="First">First Semester</option>
                  <option value= "Second">Second Semester</option>
                </select>
                
              </div>
              <div className="form-group">
                <label>Level:</label>
                <select className="form-control" {...register('level',{required:true})}>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                  <option value="500">500 Level</option>
                </select>
                {errors.level && <p className="text-danger">Course Code is required.</p>}
              </div>
              {isLoading ===true? <Loader className="text-center" type="ThreeDots" color="#0077b6" /> :
                <button className="btn btn-block btn-primary">Register Course</button>
              }
          </form>
        </div>
      </div>
    </Wrap>
  )
}
export default Registration;

const Wrap = styled.div `

  form{
    padding:5% 10%;
    box-shadow: 0 0 14px #9c9c9cab;
    border-radius:11px;
    margin:25px;
  }
`;