import React, { useState } from "react";
import styled from "styled-components";
import {FaArrowLeft} from "react-icons/fa";
import images from "../../components/images";


const Login = () => {
    const [student, setStudent] = useState(true);
  return(
    <Wrap>
      <div>
        <div className="head-tag">
          <a href="/"><FaArrowLeft /></a> 
          <p>Exam portal login</p>
          <img className="img-fluid" src={images.logo2} alt=""/>
        </div>
        {student === true? 
            <form>
              <p>Are you a Staff? <span onClick={()=>setStudent(false)}>Login Here</span></p>
              <div className="form-group">
                <label>Reg No:</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" />
              </div>
              <button className="btn btn-block btn-primary">Login</button>
            </form>
           :
            <form>
            <p>Are you a Student? <span onClick={()=>setStudent(true)}>Login Here</span></p>
            <div className="form-group">
              <label>Username:</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-block btn-primary">Login</button>
        </form>
        }
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
`;