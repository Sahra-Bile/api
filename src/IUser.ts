import axios from 'axios';

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  id: string;
}

const url = "http://localhost:3001/users"


 export const getAllUsers = async() =>{
   let response = await axios.get<IUser[]>(url)
  
   return response.data
}
