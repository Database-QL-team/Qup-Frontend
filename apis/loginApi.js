import { instance } from "./corsInstance";

export const loginApi = async (handle) => {
  try {
    console.log("요청 URL:", `/members/login?handle=${handle}`);
    const response = await instance.post(`/members/login?handle=${handle}`);
    console.log("응답 데이터:", response.data);
    if (response.data.isSuccess === false) {
      console.error("로그인 실패:", response.data.message);
      return false;
    } else {
      console.log("로그인 성공: 리프레시 리다이렉트");
      return true;
    }
  } catch (error) {
    console.error("로그인 요청 오류:", error);
    return false;
  }
};
