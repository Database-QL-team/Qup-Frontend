# Node.js 공식 이미지를 베이스 이미지로 사용
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package*.json ./

# 프로젝트 의존성 설치
RUN npm install

# 전체 프로젝트 파일 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# 애플리케이션 실행 포트 설정
EXPOSE 3000

# 애플리케이션 실행 명령
CMD ["npm", "start"]
