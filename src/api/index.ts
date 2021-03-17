import axios from "axios"


export const getAddress = async (ip: string) => {

   const response = await axios(`https://geo.ipify.org/api/v1?apiKey=at_HitWtrHXnloR4MGqHbqhd9hq1GOec&ipAddress=${ip}`)
 
   return response.data

}