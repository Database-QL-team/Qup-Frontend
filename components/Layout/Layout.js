import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./backGround/Background";

const MainContent = styled.main`
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 메인 콘텐츠 수직 가운데 정렬 */
`;

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default Layout;
