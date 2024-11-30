import { instance } from "./instance";

export const tierApi = async (tier) => {
  try {
    const response = await instance.get(`/problems/tier?tier=${tier}`);

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
