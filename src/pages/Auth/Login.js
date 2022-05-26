import React, { useState } from "react";
import styled from "styled-components";
import {FaArrowLeft} from "react-icons/fa";
import images from "../../components/images";
import {useForm} from "react-hook-form";
import Loader from "react-loader-spinner";
import api from "../../components/middleware/baseUrl";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [student, setStudent] = useState(true);
    const [isLoading, setIsLoading] =  useState(false);
    const {register, handleSubmit, formState:{errors},} = useForm();
    const baseUrl = api.localUrl; 

    const handleOptions = () =>{
      setIsLoading(false);
      setStudent(!student);
    }
    const studentLogin = (data) =>{
      console.log(data);
      sessionStorage.clear();
      setIsLoading(true);

      axios.post(`${baseUrl}/student/login`,data)
        .then(res => {
          console.log(res.data);
          if(!res.data.length){
            toast.error("invalid username and password!",{position:toast.POSITION.TOP_RIGHT});
            return;
          }

          const {full_name,reg_no} = res.data[0];
          sessionStorage.setItem("User",full_name);
          sessionStorage.setItem("regNo",reg_no);
          if(full_name.length){
            toast.success("Redirecting...",{position:toast.POSITION.TOP_RIGHT});
            window.location.href="/user/dashboard";
          }
          
        }).catch(err =>{
          toast.error("ooops! Network Error.",{position:toast.POSITION.TOP_RIGHT});
          console.log(err);
         
        });
        
        setIsLoading(false);
        
    }

    const staffLogin = (data) =>{
      console.log(data);
      setIsLoading(true);
      setTimeout(() => {
        axios.post(`${baseUrl}/staff/login`,data)
        .then((res) =>{
          const {full_name,email} = res.data[0];
          if(!res.data.length){
            toast.error("invalid username and password!",{position:toast.POSITION.TOP_RIGHT});
            return;
          }
          sessionStorage.setItem("userName",full_name);
          sessionStorage.setItem("email",email);
          if(full_name.length){
            toast.success("Redirecting...",{position:toast.POSITION.TOP_RIGHT});
            window.location.href ="/staff/dashboard";
          }
        }).catch(err => console.log(err));
        toast.error("ooops! Network Error.",{position:toast.POSITION.TOP_RIGHT});
        setIsLoading(false);
      }, 3000);
    }
 
    return(
    <Wrap>
      <div>
        <div className="head-tag">
          <a href="/"><FaArrowLeft /></a> 
          <p>Exam portal login</p>
          <img className="img-fluid" src={images.logo2} alt=""/>
        </div>
        {student === true? 
            <form onSubmit={handleSubmit(studentLogin)}>
              <p className="text-warning">Are you a Staff? <span onClick={()=> handleOptions()}>Login Here</span></p>
              <div className="form-group">
                <label>Reg No:</label>
                <input className="form-control" type="text" name="userName"
                  {...register('userName',{required:true})}
                />
                {errors.regNo && <p className="text-danger">Enter Reg.</p>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" name="password"
                  {...register('password',{required:true})}
                />
                {errors.password && <p className="text-danger">Enter password.</p>}
              </div>
              {isLoading ===true? <Loader className="text-center" type="ThreeDots" color="#0077b6" /> :
                <>
                  <button className="btn btn-block btn-primary">Login</button>
                  <ToastContainer/>
                </>
              }
            </form>
           :
            <form onSubmit={handleSubmit(staffLogin)}>
            <p className="text-warning">Are you a Student? <span onClick={()=>setStudent(true)}>Login Here</span></p>
            <div className="form-group">
              <label>Email Address:</label>
              <input className="form-control" type="email" name="username"
                {...register('username',{required:true})}
              />
              {errors.username && <p className="text-danger">User Email Address is required.</p>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input className="form-control" type="password" name="password"
                {...register('password',{required:true})}
              />
              {errors.password && <p className="text-danger">Password is required.</p>}
            </div>
            {isLoading ===true? <Loader className="text-center" type="ThreeDots" color="#0077b6" /> :
              <>
                <button className="btn btn-block btn-primary">Login</button>
                <ToastContainer />
              </>
             }
        </form>
        }
        <div className="footer">
          <p>&copy;2021 Godfrey Okoye University. All Rights Reserved</p>
        </div>
      </div>
    </Wrap>
  )
}
export default Login;

const Wrap = styled.div `
  .head-tag{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background:#17418D;
    color:#fff;
    padding:5px 20%;
    font-size:24px;

    @media screen and (max-width:500px){
      padding:5px 10px;
      font-size:20px;
    }
    img{
      width:6%;
      @media screen and (max-width:500px){
        width:13%;
      }
    }
    p{
      font-weight:700;
      text-transform:uppercase;
      @media screen and (max-width:500px){
        font-weight:600;
        margin-top:18px;
      }
    }
    a{
      font-size: 24px;
      color:#fff;
    }
    a:hover{
      color:gold;
    }
  }
  form{
    width:25rem;
    margin: 5% auto;
    padding:15px;
    border-radius:11px;
    box-shadow: 0 0 14px #ccc;

    @media screen and (max-width:500px){
      width:90%;
    }

    p{
      font-size:18px;

      span{
        cursor:pointer;
        font-weight:bold;
        color:#0077b6;
      }
    }
  }

  .footer{
    background:#17418D;
    color:#fff;
    padding: 15px;
    width:100%;
    position:fixed;
    bottom:0;
    font-size:18px;
    font-weight:500;
    @media screen and (max-width:500px){
      padding:10px;
    }
    p{
      font-size:14px;
      text-align:center;
      @media screen and (max-width:500px){
        font-size:12px;
      }
    }
  }
`;