import styled from "styled-components";
import React, { useState } from "react";
import { TruncatedText } from "../../utils/TruncatedText";

const ProblemContainer = styled.div`
  margin: 20px 0;
  @media (max-width: 700px) {
    margin: 10px 0;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
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
  td:last-child {
    text-align: right;
    width: 30%;
    padding-right: 25px;
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 0.7rem;

    th,
    td {
      padding: 7px;
    }
  }

  td:first-child {
    padding-left: 10px;
  }

  td:last-child {
    text-align: right;
    width: 40%;
    padding-right: 10px;
  }
`;
const LinkButton = styled.a`
  background-color: green;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 700px) {
    font-size: 0.6rem;
    padding: 4px 8px;
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
                <td>{problem.problemId}</td>
                <td>
                  <TruncatedText
                    title={problem.title}
                    maxWidth="250px"
                    maxWidthMobile="60px"
                  >
                    {problem.title}
                  </TruncatedText>
                </td>
                <td>
                  <LinkButton
                    href={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    기여하기!
                  </LinkButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </ProblemContainer>
  );
};

export default TodayProblem;
