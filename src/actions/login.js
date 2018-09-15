import { LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "constants/Action_constants";
import { URL_USER_LOGIN} from "constants/Endpoint";
import { setUser, removeUser } from 'utils/localStorage'
import client from 'services/base'

export const loginStart = () => ({
  type: LOGIN_START
})
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
})

export const logout = () =>({
  type: LOGOUT
})

export const loginAction = (data) =>{
  return (dispatch) => {
    dispatch(loginStart());
    return client().post(URL_USER_LOGIN, data)
    .then( res => {
      let { id } = res.data.data;
      dispatch(
        loginSuccess({
        id,
        email: data.email
        })
      )
      setUser(id)

    })
    .catch( err => {
      dispatch(loginSuccess()) 
      return err
    })
  }
}

export const logoutAction = (data) =>{
  return (dispatch) => {
    removeUser()
    dispatch(logout())
  }
}