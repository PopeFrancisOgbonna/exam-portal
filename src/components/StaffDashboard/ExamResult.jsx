import React,{useEffect,useState} from "react";
import styled from "styled-components";
import Axios from "axios";
import api from "../middleware/baseUrl";



const ExamResult = () => {

  const headers = {"s/n":'', name:'', regNo:'', course:'', code: '', score:''}
  let tableHeader = () => {
    let header = Object.keys(headers);
    return header.map((key, index) => {
      return<th key={index}>{key.toUpperCase()}</th>
    })
  }

  let renderTable = (data) => {
    return data.map((result, index) => {
      return<tr key={result.id}>
        <td>{++index}</td>
        <td>{result.name}</td>
        <td>{result.reg_no}</td>
        <td>{result.course_title}</td>
        <td>{result.course_code}</td>
        <td>{result.score}</td>
      </tr>
    })
  };

  const appApi = api.localUrl;
  const [code, setCode] = useState("");
  const [results, setResults] = useState([]);

  
  async function getResults (code){
    try {
      let resultData = await  Axios.get(`${appApi}/results/${code}`);
      return resultData.data;
    } catch (error) {
      console.log(error)
    }
  }
   
  useEffect(() =>{
    const updateResult = async () =>{
      const data = await getResults(code);
      setResults(data);
    };
    updateResult();
  }, [code]);

  return(
    <Wrapper> 
      <div className="input-group my-3 mx-auto " id="search-bar">
        <input type="text" className="form-control " placeholder="Enter Course Code" aria-label="Course-Code" 
          aria-describedby="exam-code" onChange={(e)=>setCode(e.target.value)}
        />
        <div className="input-group-append">
          <span className="btn btn-secondary input-group-text" id="exam-code">View Result</span>
        </div>
      </div>
      {!results.length ? <p>Loading...</p> :
        code !=="" &&
        <div className="table-container">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                {tableHeader()}
              </tr>
            </thead>
            <tbody>
              {renderTable(results)}
            </tbody>
          </table>
        </div>
      }
    </Wrapper>
  )
}
export default ExamResult;

const Wrapper = styled.div `
  #search-bar{
    width:25%;

    @media screen and (max-width:768px){
      width:45% !important;
    }
    @media screen and (max-width:480px){
      width:95% !important;
    }
  }
  .table-container{
    overflow-x: auto;
  }
`;