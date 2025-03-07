import { instance } from "./instance";

export const EwhaHistoryApi = async () => {
  try {
    const response = await instance.get(`/ewhahistory`);
    console.log(response.data);

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
