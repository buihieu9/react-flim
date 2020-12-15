const { default: axiosClient } = require("./axiosClient");
const filmApi = {};

filmApi.getAll = async (params) => {
  const url = "api/product/getProductByQuery";
  return await axiosClient.get(url, { params });
};
filmApi.getOne = async (params) => {
  const url = `api/film/get-film`;
  return await axiosClient.get(url, { params });
};

export default filmApi;
