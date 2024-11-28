import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { TruncatedText } from "../../utils/TruncatedText";

// 초록 배경
const WrapContainer = styled.div`
  padding: 20px 40px 40px 40px;
  margin: 30px auto;
  background: rgba(47, 129, 65, 0.1);
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
  text-align: center;
  width: 80%;

  @media (max-width: 700px) {
    margin: 20px auto;
    padding: 10px 20px;
  }
`;

// 표
const Table = styled.table`
  font-size: 1.3rem;
  width: 90%;
  background: rgba(0, 0, 0, 0);
  border-spacing: 0;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;

  th,
  td {
    padding: 10px 5px;
    border-bottom: 1px solid green;
    border-top: 1px solid green;
    text-align: left;
  }

  th {
    font-weight: bold;
    background-color: rgba(47, 129, 65, 0.2);
  }

  th:first-child,
  td:first-child {
    padding-left: 20px;
  }

  th:last-child,
  td:last-child {
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 0.7rem;
    margin-top: 20px;
    margin-bottom: 20px;
    th:first-child,
    td:first-child {
      padding-left: 10px;
    }
    th:nth-child(3),
    td:nth-child(3) {
      width: 15%;
    }
  }
`;

const LinkButton = styled.a`
  background-color: green;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 700px) {
    font-size: 0.6rem;
    padding: 4px 8px;
  }
`;

const StyledImage = styled.img`
  width: 70%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const DifficultyDetailProblemTable = ({ name, ProblemData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <WrapContainer
      className={isVisible ? "slide-up" : ""}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>푼 사람 수</th>
            <th>링크</th>
          </tr>
        </thead>
        <tbody>
          {ProblemData &&
            ProblemData.map((Problem, index) => (
              <tr key={index}>
                <td>{Problem.problemId}</td>
                <td>
                  <TruncatedText
                    title={Problem.title}
                    maxWidth="430px"
                    maxWidthMobile="100px"
                  >
                    {Problem.title}
                  </TruncatedText>
                </td>
                <td>{Problem.solvedNum}</td>
                <td>
                  <LinkButton
                    href={Problem.link}
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
      {name === "B4" && <StyledImage src="/images/b4.png" />}
      {name === "B5" && <StyledImage src="/images/b5.png" />}
    </WrapContainer>
  );
};

export default DifficultyDetailProblemTable;
