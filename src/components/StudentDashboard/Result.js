import React,{useEffect, useState} from "react";
import styled from "styled-components";
import Axios from "axios";
import api from "../middleware/baseUrl";
import images from "../images";


const Result = () =>{

  const baseUrl = api.localUrl;
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

  const reg = sessionStorage.getItem("regNo");
  const [results, setResults] = useState([]);
 
  async function getResults (regNo){
   
    try {
      let resultData = await  Axios.get(`${baseUrl}/results/student?regno=${regNo}`);
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
      {results.length ===0 ? <div className="text-center"><img className="img-fluid result" src={images.resultSheet} alt="empty result sheet"/></div> :
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
  .result{
    width: 30%;
  }
`;