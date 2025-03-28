import React, { useEffect, useState } from "react";
import styled from "styled-components";


const WrapContainer = styled.div`
  
`;

const Button = styled.button`
  background-color: #2e7d32;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: auto;
  display: block;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1b5e20;
  }

  @media (max-width: 700px) {
    font-size: 0.6rem;
    padding: 7px 10px;
    margin: auto;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(92, 140, 102, 0.2);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  border: 5px solid rgb(90, 145, 91);
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  color: #1b5e20;
  font-size: 0.95rem;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
    
  @media (max-width: 700px) {
    font-size: 0.7rem;
    padding: 15px;

  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  float: right;
  cursor: pointer;
  color: #1b5e20;
`;

const EwhaContributionRankingButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 400);
        return () => clearTimeout(timer);
      }, []);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
        <Button onClick={openModal}>📊 기여 점수 산정 기준 보기</Button>
        {isOpen && (
            <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal}>×</CloseButton>
                <h2>📊 학생 순위 기여 랭크용 수식 설명</h2>
                <br />

                <h3>📌 적용 범위</h3>
                <ul>
                <li>전체 기간</li>
                <li>전체 문제</li>
                </ul>

                <h3>📌 적용 항목</h3>
                <ul>
                <li>문제 난이도</li>
                <li>
                    내가 푼 문제들에 대해 <strong>이화인이 몇 명 풀었는지</strong>를 고려해
                    가중치 적용 <br/>(이화인이 적게 푼 문제일수록 점수 증가)
                </li>
                </ul>
                <br />

                <h3>🧮 <code>S_basic</code> : 기본 점수 (난이도) </h3>
                <p>
                <strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S_basic = ∑ Ki</strong><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ki: 문제 i의 난이도 점수<br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;예: Bronze V = 1점 ~ Ruby I = 30점<br />
                </p>


                <h3>✨<code>S_rare</code> : 기여도 점수 (희소성)</h3>
                <p>
                <strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S_rare = ∑ K * e^(−λ × Ni)</strong><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ni: 문제를 푼 이화인 수<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K: 기본 가중치 (기본값 10)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;λ: 감소율 (기본값 0.02)<br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;푼 사람이 적을수록 더 많은 점수
                </p>
                <br />

                <h3>✅ 최종 수식</h3>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>S_total = S_basic + S_rare</strong>
                </p>
            </ModalContent>
            </ModalOverlay>
        )}
        </>
    );
};

export default EwhaContributionRankingButton;
