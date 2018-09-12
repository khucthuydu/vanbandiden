import Login from 'components/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  { loginAction } from 'actions/login'

function mapStateToProps({ login }){
  return {
    login
  }
}

function mapDispatchToProps(dispatch){
  return {
    loginAction: bindActionCreators(loginAction, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)