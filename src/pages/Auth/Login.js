import React, { useState } from "react";
import styled from "styled-components";
import {FaArrowLeft} from "react-icons/fa";
import images from "../../components/images";
import {useForm} from "react-hook-form";


const Login = () => {
    const [student, setStudent] = useState(true);
    const {register, handleSubmit, formState:{errors},} = useForm();

    const studentLogin = (data) =>{
      console.log(data)
    }

    const staffLogin = (data) =>{
      console.log(data)
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
              <p>Are you a Staff? <span onClick={()=>setStudent(false)}>Login Here</span></p>
              <div className="form-group">
                <label>Reg No:</label>
                <input className="form-control" type="text" name="regNo"
                  {...register('regNo',{required:true})}
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
              <button className="btn btn-block btn-primary">Login</button>
            </form>
           :
            <form onSubmit={handleSubmit(staffLogin)}>
            <p>Are you a Student? <span onClick={()=>setStudent(true)}>Login Here</span></p>
            <div className="form-group">
              <label>Username:</label>
              <input className="form-control" type="text" name="username"
                {...register('username',{required:true})}
              />
              {errors.username && <p className="text-danger">User Name is required.</p>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input className="form-control" type="password" name="password"
                {...register('password',{required:true})}
              />
              {errors.password && <p className="text-danger">Password is required.</p>}
            </div>
            <button className="btn btn-block btn-primary">Login</button>
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

    img{
      width:6%;
    }
    p{
      font-weight:700;
      text-transform:uppercase;
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
    box-shadow: 0 0  5px #ccc;

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
    p{
      font-size:14px;
      text-align:center;
    }
  }
`;