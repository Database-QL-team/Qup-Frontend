import Layout from "../components/Layout/Layout";
import styled, { css } from "styled-components";

const Home = () => {
  return (
    <div>
      <Layout>
        <img
          src="/images/background.svg"
          alt="hero-background"
          css={css`
            width: 1521px;
            height: 355px;

            position: fixed;
            left: 0;
            top: -33px;

            zoom: 2.7;

            pointer-events: none;
            z-index: -1;
          `}
        />
      </Layout>
    </div>
  );
};

export default Home;
