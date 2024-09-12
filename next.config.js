const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,

  // webpackDevMiddleware는 더 이상 사용되지 않으므로 제거합니다.

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*", // 기존 프록시 대상
      },
      {
        source: "/pstogether/:path*",
        destination: "http://localhost:8080/pstogether/:path*", // 새로운 프록시 대상
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // 개발 환경 및 클라이언트 측에서만 Hot Module Replacement 적용
    if (dev && !isServer) {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    // 환경 변수 설정
    config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NEXT_DISABLE_SSR": JSON.stringify(
              process.env.NEXT_DISABLE_SSR
          ),
        })
    );

    return config;
  },
};
