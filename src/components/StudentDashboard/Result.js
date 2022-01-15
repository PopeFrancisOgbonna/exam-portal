import React,{useEffect, useState} from "react";
import styled from "styled-components";
import Axios from "axios";
import api from "../middleware/baseUrl";


const Result = () =>{

  const appApi = api.localUrl;
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

  const reg = "esut/2014/155200";
  const [results, setResults] = useState([]);
 
  async function getResults (regNo){
   
    try {
      let resultData = await  Axios.get(`${appApi}/results/student?regno=${regNo}`);
      console.log(resultData.data)
      return resultData.data;
    } catch (error) {
      console.log(error)
    }
  }
   
  useEffect(() =>{
    const updateResult = async () =>{
      const data = await getResults(reg);
      setResults(data);
      console.log(data.length)
    };
    updateResult();
  }, [reg]);

  return(
    <Wrap className="container mt-5">
      {!results.length ? <p>Loading...</p> :
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
    </Wrap>
  )
}
export default Result;

const Wrap = styled.div `
  .table-container{
    overflow-x:auto;
  }
`;