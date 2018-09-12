import axios from 'axios'
import { getUser } from 'utils/localStorage'
let Token = null

function getToken(){
  if(!Token) Token = getUser();
  return Token
}

export default function(){
  return axios.create({
    baseURL: process.env.API_URI,
    timeout: 5000,
    headers: {
      'access-token': getToken()
    }
  })
}

