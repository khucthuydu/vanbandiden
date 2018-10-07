import { URL_ORGANIZATION } from "constants/Endpoint";
import client from 'services/base';

export const fetch = (where) =>{
    return client().get(URL_ORGANIZATION) 
}

export const create = (data) =>{
  return client().post(URL_ORGANIZATION, data) 
}

export const update = (id, data) =>{
  return client().patch(`${URL_ORGANIZATION}/${id}`, data) 
}

export const deleteOne = (id) =>{
  return client().patch(`${URL_ORGANIZATION}/${id}`, {status: 'CLOSE'}) 
}