import { URL_DOCS_TYPE } from "constants/Endpoint";
import client from 'services/base';

export const fetch = (where) =>{
    return client().get(URL_DOCS_TYPE) 
}

export const create = (data) =>{
  return client().post(URL_DOCS_TYPE, data) 
}

export const patch = (data) =>{
  return client().patch(`${URL_DOCS_TYPE}/${data.id}`, data) 
}

export const deleteOne = (id) =>{
  return client().post(URL_DOCS_TYPE, {id: id, removed: 1}) 
}