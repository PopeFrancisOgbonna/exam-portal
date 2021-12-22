import React from "react";
import styled from "styled-components";



const Result = () =>{

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
  let filtered =[
    {
      course_code: "Demo 101",
      course_title: "Demo Course",
      id: 2,
      name: "Sunday Francis",
      reg_no: "esut/2014/155200",
      score: "31.25%"
    },
    {
      course_code: "Demo 101",
      course_title: "Demo Course",
      id: 2,
      name: "Sunday Francis",
      reg_no: "esut/2014/155200",
      score: "31.25%"
    },
    {
      course_code: "Demo 101",
      course_title: "Demo Course",
      id: 2,
      name: "Sunday Francis",
      reg_no: "esut/2014/155200",
      score: "31.25%"
    }
  ]
  return(
    <Wrap className="container mt-5">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            {tableHeader()}
          </tr>
        </thead>
        <tbody>
          {renderTable(filtered)}
        </tbody>
      </table>
    </Wrap>
  )
}
export default Result;

const Wrap = styled.div `

`;