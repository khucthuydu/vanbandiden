
import { withRouter } from 'react-router-dom'

export const navigatedLogin = withRouter(({history}) =>{
  history.push('/login')
})