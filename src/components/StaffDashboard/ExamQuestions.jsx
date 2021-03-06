import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import images from "../images";
import api from "../middleware/baseUrl";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const ExamQuestions = () => {

  const appApi = api.localUrl;
  const {register, handleSubmit, formState:{errors},} = useForm();
  const [isLoading, setIsLoading]= useState(false);
  const [msg, setMsg] = useState('');

  const loadExamQuestion = (data) => {
    setIsLoading(true);
    setMsg('');
    let payload = {
      course:data.title, 
      code: data.code, 
      quest: data.question, 
      ans: data.ans, 
      keys: [
        data.keyword,
        data.keyword1,
        data.keyword2,
        data.keyword3
      ]
    }
    console.log(payload);
    setTimeout(() => {
      Axios.post(`${appApi}/question`,payload)
        .then(data =>{
          console.log(data);
          setMsg(data.data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          toast.error('Error: Unable to upload Questions! Try again later',{position:toast.POSITION.TOP_RIGHT});
          setIsLoading(false);
        })
      
    }, 3000);
  }

  return(
    <Wrap>
      <div className="container-fluid my-1">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={images.online} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 col-sm-12">
            <h1>Exam Questions Upload</h1>
            <p className=" text-danger">* Don't Upload Bulk Questions</p>
            <hr/>
            <div className="my-5">
              <form onSubmit={handleSubmit(loadExamQuestion)}>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input type="text" name="dept" className="form-control" placeholder="Enter Department"
                        {...register('dept',{required:true})}
                      />
                      {errors.dept && <span className="text-danger">Student Department is Required</span>}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <select name="level" className="form-control"
                        {...register('level',{required:true})}
                      >
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <textarea name="question" cols="30" rows="3" className="form-control" placeholder="Enter Question"
                        {...register('question',{required:true})}
                      ></textarea>
                      {errors.question && <span className="text-danger">Question can't be empty</span>}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <input type="text" name="title" className="form-control" placeholder="Course Title"
                        {...register('title',{required:true})}
                      />
                      {errors.title && <span className="text-danger">Course title is required</span>}
                    </div>
                    <div className="form-group">
                      <input type="text" name="code" className="form-control" placeholder="Course Code"
                        {...register('code',{required:true})}
                      />
                      {errors.code && <span className="text-danger">Course Code is required</span>}
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <textarea name="ans" cols="30" rows="8" className="form-control" placeholder="Expected Ansewr"
                        {...register('ans',{required:true})}
                      ></textarea>
                      {errors.ans && <span className="text-danger">Answer field can't be empty</span>}
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <input type="text" name="keyword"className="form-control" placeholder="Enter Keyword"
                            {...register('keyword',{required:true})}
                          />
                          {errors.keyword && <span className="text-danger">This Keyword is required.</span>}
                        </div>
                        <div className="form-group">
                          <input type="text" name="keyword1"className="form-control" placeholder="Enter Keyword"
                            {...register('keyword1',{required:true})}
                          />
                          {errors.keyword1 && <span className="text-danger">This Keyword is required.</span>}
                        </div>
                        <div className="form-group">
                          <input type="text" name="keyword5"className="form-control" placeholder="Enter Keyword"
                            {...register('keyword5',{required:false})}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <input type="text" name="keyword3"className="form-control" placeholder="Enter Keyword"
                            {...register('keyword3',{required:true})}
                          />
                          {errors.keyword3 && <span className="text-danger">This Keyword is required.</span>}
                        </div>
                        <div className="form-group">
                          <input type="text" name="keyword2"className="form-control" placeholder="Enter Keyword"
                            {...register('keyword2',{required:true})}
                          />
                          {errors.keyword2 && <span className="text-danger">This Keyword is required.</span>}
                        </div>
                        <div className="form-group">
                          <input type="text" name="keyword4"className="form-control" placeholder="Enter Keyword"
                            {...register('keyword4',{required:false})}
                          />
                        </div>
                      </div>
                      {msg !=="" &&
                        <div className={msg.toLocaleLowerCase().includes('error')?"alert alert-warning alert-dismissible fade show":"alert alert-success alert-dismissible fade show"} role="alert">
                          <strong>{msg}</strong> 
                          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      }
                      {!isLoading ? 
                        <>
                          <button className="btn btn-block btn-primary">Upload Question</button>
                          <ToastContainer/>
                        </>
                      :
                        <Loader type="ThreeDots" className="mx-auto" color="#0077b6" />
                      }
                    </div>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  )
}
export default ExamQuestions;

const Wrap = styled.div `

`;
