import axios from "axios";

const axiosRequest = async (url, method, data) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default axiosRequest;
