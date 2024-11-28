import { instance } from "./instance";

export const tagApi = async (tag) => {
  try {
    const response = await instance.get(`/problems/algo?tag=${tag}`);

    if (response.data.isSuccess === true) {
      return response.data.result;
    } else {
      console.error(response.data.message);
      return null;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};
