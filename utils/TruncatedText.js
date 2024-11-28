import styled from "styled-components";

export const TruncatedText = styled.span`
  display: inline-block;
  max-width: ${(props) => props.maxWidth || "150px"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    max-width: ${(props) => props.maxWidthMobile || "90px"};
  }
`;
