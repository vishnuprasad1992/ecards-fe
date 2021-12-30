import { axios } from "../setups/axios";

export const registerUser = async (data)=>{
    try {
        const response = await axios()({
            url:"/api/user/register",
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
export const loginUser = async (data)=>{
    try {
        const response = await axios()({
            url:"/api/user/login",
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