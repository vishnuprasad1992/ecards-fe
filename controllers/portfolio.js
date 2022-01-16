import authAxios, { axios } from "../setups/axios";

export const savePortfolioDetails = async (data)=>{
    try {
        const response = await authAxios()({
            url:"/api/portfolio/add-portfolio",
            method:"POST",
            data:data
        })
        if(response && response.data){
            return response.data
        }
    } catch (error) {
        console.log(error)
        return error.message
    }

}
export const getPortfolio = async (data)=>{
    try {
        const response = await axios()({
            url:"/api/portfolio/"+data,
            method:"GET",
        })
        if(response && response.data){
            return response.data
        }
    } catch (error) {
        console.log(error)
        return error.message
    }

}
