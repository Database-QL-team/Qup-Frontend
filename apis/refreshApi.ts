import { instance } from "./instance";

export const refreshApi = async (handle: string) => {
  try {
    const response = await instance.get(`/problems/refresh?handle=${handle}`);
    console.log(response.data);
    if (response.data.isSuccess === true) {
      console.log("리프레시 성공:", response.data.message);
      return true;
    } else {
      console.error("리프레시 실패:", response.data.message);
      return false;
    }
  } catch (error) {
    console.error("리프레시 요청 오류:", error);
    return false;
  }
};