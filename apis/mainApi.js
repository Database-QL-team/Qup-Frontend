import { instance } from "./instance";

export const mainApi = async () => {
  try {
    const response = await instance.get("/main");
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
