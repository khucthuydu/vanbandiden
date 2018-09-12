import { LOGIN_START, LOGIN_SUCCESS} from "constants/Action_constants";
import { URL_USER_LOGIN} from "constants/Endpoint";

import client from 'services/base'
export const loginStart = () => ({
  type: LOGIN_START
})
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
})

export const loginAction = (data) =>{
  return (dispatch) => {
    console.log('sfd')
    dispatch(loginStart());
    return client().post(URL_USER_LOGIN, data)
    .then( res => {
      let { id } = res.data;
      dispatch(
        loginSuccess({
        id,
        email: data.email
        })
      )
    })
    .catch( err => {
      dispatch(loginSuccess({
        id:"",
        email:""
      })) 
      return err
    })
  }
}