const { default: axiosClient } = require("./axiosClient")
const filmApi = {}

filmApi.getAll = async (params) => {
    const url = '/Film'
    return await axiosClient.get(url, params)
}
filmApi.getOne = async (id) => {
    const url= `/Film?id=${id}`
    return await axiosClient.get(url)
}

export default filmApi