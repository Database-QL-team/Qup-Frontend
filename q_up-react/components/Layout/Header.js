import styled, { css } from "styled-components";
import Link from "next/link";

import { FlexBox } from "../ui/flex-box";

const routes = [
  { title: "분류별 문제", href: "/" },
  { title: "난이도별 문제", href: "/" },
  { title: "함께 풀어요", href: "/" },
  { title: "이화랭킹", href: "/" },
];

const zoomInOnHover = css`
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.14);
  }
`;

const LogoWrapper = styled.div`
  ${zoomInOnHover}
  width: 42px;
  height: 28px;

  cursor: pointer;

  z-index: 1001;
  img {
    width: 100%; /* 추가 */
    height: 100%; /* 추가 */
    object-fit: contain; /* 추가 */
  }
`;
const Header = styled(({ className }) => {
  return (
    <header className={className}>
      <Link href="/">
        <FlexBox>
          <LogoWrapper>
            <img
              src="/images/QL_logo.png"
              alt="logo"
              //style={{ animationDelay: "500ms" }}
            />
          </LogoWrapper>
        </FlexBox>
      </Link>
      <div style={{ flexGrow: "1" }} />
      {routes.map(({ title, href }) => (
        <Link key={title} href={href}>
          <DesktopTopbarItem>{title}</DesktopTopbarItem>
        </Link>
      ))}
    </header>
  );
})`
  backdrop-filter: blur(1.5rem);
  display: flex;
  align-items: center;

  position: fixed;
  z-index: 1000;
  width: 100%;
  max-width: 1000px;

  height: 75px;
  ${(props) => props.theme.main.frame.padding};

  @media (max-width: 700px) {
    padding: 0 8vw;
  }
`;

const DesktopTopbarItem = styled.div`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.02rem;

  padding-left: 2.4rem;

  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }

  &:hover {
    font-weight: 500;
  }

  @media ${(props) => props.theme.device.sm} {
    display: none;
  }
`;

export default Header;
