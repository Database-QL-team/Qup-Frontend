import styled, { css } from "styled-components";
import Link from "next/link";
import Text from "../ui/text/Text";

const routes = [
  { title: "분류별 문제", href: "/tag-problems" },
  { title: "난이도별 문제", href: "/difficulty-problems" },
  { title: "이화기여랭킹", href: "/ewha-contribution-ranking" },
  { title: "문의", href: "/Contact" },
];

const LogoWrapper = styled.div`
  width: 42px;
  height: 28px;
  cursor: pointer;
  z-index: 1001;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const StyledHeader = styled.header`
  backdrop-filter: blur(3rem);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 78px;
  padding: 0 0 0 0;

`;

const Qup = styled.div`
  font-size: 1.4rem;
  color: #0c0e27;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

const Header = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <Link href="/">
        <div style={{ paddingLeft: "5vw" }}>
          <LogoWrapper>
            <img src="/images/QL_logo.png" alt="logo" />
          </LogoWrapper>
        </div>
      </Link>

      <div style={{ paddingLeft: "20px", paddingTop: "2px" }}>
        <Qup>뀨업</Qup>
      </div>

      <div style={{ paddingLeft: "50px" }}></div>
      <div style={{ flexGrow: 1 }} />
      {routes.map(({ title, href }) => (
        <Link key={title} href={href}>
          <DesktopTopbarItem>{title}</DesktopTopbarItem>
        </Link>
      ))}
      <div style={{ paddingLeft: "5vw" }}></div>
    </StyledHeader>
  );
};

const DesktopTopbarItem = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Malgun Gothic", "Apple SD Gothic Neo", "Nanum Gothic", "Arial";

  letter-spacing: -0.02rem;
  padding-left: 2.4rem;
  cursor: pointer;
  color: green;

  text-decoration: none;

  &:last-child {
    padding-right: 0;
  }

  &:hover {
    font-weight: 600;
  }

  @media (max-width: 700px) {
    font-size: 0.7rem;
    padding-left: 1rem;
  }
`;

export default Header;
