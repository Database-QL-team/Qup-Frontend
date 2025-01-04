import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: transparent;
  color: #4caf50;
  border: 2px solid #4caf50;
  border-radius: 50%;
  padding: 10px;
  width: 70px;
  height: 70px;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(69, 160, 73, 0.2);
    transform: scale(0.95);
  }

  &:active {
    background-color: #3e8e41;
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.5);
  }

  @media (max-width: 700px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
`;
