const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,

  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // 1초마다 파일 변경 감지
      aggregateTimeout: 300, // 300ms 후에 다시 빌드 시작
    };
    return config;
  },

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
    if (dev && !isServer) {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }

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
