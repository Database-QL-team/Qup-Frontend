import styled from "styled-components";
import React, { useState } from "react";

const ProblemContainer = styled.div`
  margin: 20px 0;
`;

const Title = styled.div`
<<<<<<< HEAD
  font-size: 1.5rem;
=======
  font-size: 1.2rem;
>>>>>>> newcode/#0
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const TableWrapper = styled.div`
  text-align: right;
`;

const Table = styled.table`
<<<<<<< HEAD
  font-size: 1.3rem;
=======
  font-size: 1rem;
>>>>>>> newcode/#0
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border-spacing: 0;
  border-collapse: collapse;
<<<<<<< HEAD

=======
>>>>>>> newcode/#0
  th,
  td {
    padding: 10px;
    border-bottom: 1px solid green;
    border-top: 1px solid green;
    text-align: left;
  }
<<<<<<< HEAD

  td:first-child {
    padding-left: 50px;
  }

  td:last-child {
    text-align: right;
    padding-right: 50px;
  }
`;

const RegisterButton = styled.button`
  font-size: 1.1rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
=======
  td:first-child {
    padding-left: 25px;
    width: 20%;
>>>>>>> newcode/#0
  }
`;

const TodayProblem = ({ title, problems }) => {
<<<<<<< HEAD
  const [registrations, setRegistrations] = useState(problems.map(() => ""));

  const handleRegisterClick = (index) => {
    const name = prompt("백준 핸들을 입력하세요:");
    if (name) {
      const newRegistrations = [...registrations];
      newRegistrations[index] = name;
      setRegistrations(newRegistrations);
    }
  };

=======
>>>>>>> newcode/#0
  return (
    <ProblemContainer>
      <Title>{title}</Title>
      <TableWrapper style={{ marginLeft: "60px" }}>
        <Table>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index}>
<<<<<<< HEAD
                <td>{problem.name}</td>
                <td>
                  {registrations[index] ? (
                    registrations[index]
                  ) : (
                    <RegisterButton onClick={() => handleRegisterClick(index)}>
                      등록하기
                    </RegisterButton>
                  )}
                </td>
=======
                <td>{problem.pid}</td>
                <td>{problem.p_title}</td>
>>>>>>> newcode/#0
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </ProblemContainer>
  );
};

export default TodayProblem;
