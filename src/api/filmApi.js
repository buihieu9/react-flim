const { default: axiosClient } = require("./axiosClient")


const getAll = (params) => {
    const url = '/films'
    return axiosClient.get(url, params)
}
const getOne = (id) => {
    const url= `/film/${id}`
    return axiosClient.get(url)
}

export { getAll, getOne}