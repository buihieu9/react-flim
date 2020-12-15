const { default: axiosClient } = require("./axiosClient")
const filmApi = {}

filmApi.getAll = async (params) => {
    const url = `/api/product/getProductByQuery`
    return await axiosClient.get(url,{params})
}
filmApi.getOne = async (params) => {
    const url= `/api/product/getProductById?${params}`
    return await axiosClient.get(url)
}
filmApi.voteFilm = async (params)=>{
    const url = `/api/product/vote`
    return await axiosClient({
        method:'POST',
        url:url,
        data:params
    })
}
filmApi.getComments = async(params)=>{
    const url = `/api/product/comment`
    return await axiosClient.get(url,{params})
}
filmApi.postComment = async(params)=>{
    const url = '/api/product/comment'
    return await axiosClient({
        method:"POST",
        url:url,
        data:params
    })
}
export default filmApi;