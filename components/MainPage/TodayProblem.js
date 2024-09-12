import styled from "styled-components";
import React, { useState } from "react";

const ProblemContainer = styled.div`
  margin: 20px 0;
`;

const Title = styled.div`

  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const TableWrapper = styled.div`
  text-align: right;
`;

const Table = styled.table`
  font-size: 1rem;

  width: 100%;
  background: rgba(0, 0, 0, 0);
  border-spacing: 0;
  border-collapse: collapse;
  
  th,
  td {
    padding: 10px;
    border-bottom: 1px solid green;
    border-top: 1px solid green;
    text-align: left;
  }

  td:first-child {
    padding-left: 25px;
    width: 20%;
  }
`;

const TodayProblem = ({ title, problems }) => {
  return (
    <ProblemContainer>
      <Title>{title}</Title>
      <TableWrapper style={{ marginLeft: "60px" }}>
        <Table>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index}>

                <td>{problem.pid}</td>
                <td>{problem.p_title}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </ProblemContainer>
  );
};

export default TodayProblem;
