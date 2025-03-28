import styled from "styled-components";
import React, { useEffect, useState } from "react";

const WrapContainer = styled.div`
  padding: 20px 40px 40px 40px;
  margin: 30px auto;
  background: rgba(47, 129, 65, 0.1);
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
  text-align: center;
  width: 70%;

  @media (max-width: 700px) {
    margin: 20px auto;
    padding: 10px 20px;
    width: 85%;
  }
`;

const Table = styled.table`
  font-size: 1.3rem;
  width: 90%;
  background: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  margin: 40px auto;

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

  @media (max-width: 700px) {
    width: 100%;
    font-size: 0.8rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const EwhaContributionRankingTable = ({ rankingData }) => {
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
            <th>순위</th>
            <th>핸들</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          {rankingData?.map((user) => (
            <tr key={user.handle}>
              <td>{user.rank}</td>
              <td>
                    <a
                        href={`https://solved.ac/profile/${user.handle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2e7d32", textDecoration: "underline" }}
                    >
                    {user.handle}
                    </a>
                </td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </WrapContainer>
  );
};

export default EwhaContributionRankingTable;