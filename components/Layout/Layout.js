import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./backGround/Background";
import RefreshButton from "./refreshButton/RefreshButton";

const MainContent = styled.main`
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 메인 콘텐츠 수직 가운데 정렬 */
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  @media (max-width: 700px) {
    bottom: 25px;
    right: 15px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <FloatingButton aria-label="Refresh">
        <RefreshButton />
      </FloatingButton>
    </>
  );
};

export default Layout;
