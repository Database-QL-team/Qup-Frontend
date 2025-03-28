import styled from "styled-components";
import { TruncatedText } from "../../utils/TruncatedText";

const BoxContainer = styled.div`
  width: 280px;
  height: 140px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.05); /* 반투명 검정색 배경 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  position: relative;
  margin: 10px;

  @media (max-width: 700px) {
    width: 150px;
    height: 90px;
    padding: 5px;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: black;
  top: ${(props) => (props.position === "top" ? "0" : "auto")};
  bottom: ${(props) => (props.position === "bottom" ? "0" : "auto")};
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => (props.position === "top" ? "-4px" : "auto")};
  bottom: ${(props) => (props.position === "bottom" ? "-4px" : "auto")};
  left: -4px;
`;

const CircleRight = styled(Circle)`
  left: auto;
  right: -4px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

const RankingNum = styled.div`
  font-size: 3rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const RankingBox = ({ title, rankingNum }) => {
  return (
    <BoxContainer>
      <Line position="top">
        <Circle position="top" />
        <CircleRight position="top" />
      </Line>
      <div style={{ margin: "12px 18px 12px 13px" }}>
        <Title>
          <TruncatedText maxWidth="220px" maxWidthMobile="120px">
            {title}
          </TruncatedText>
        </Title>
        <RankingNum>{rankingNum}</RankingNum>
      </div>
      <Line position="bottom">
        <Circle position="bottom" />
        <CircleRight position="bottom" />
      </Line>
    </BoxContainer>
  );
};

export default RankingBox;
