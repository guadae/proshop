import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// component created to make a route private 
// note on replace from stackoverflow -- The replace options property is a REPLACE navigation action. It's a redirect, replacing the current entry in the history stack versus PUSHing a new entry onto the top like a regular navigation. Visit https://stackoverflow.com/questions/72794430/what-does-usenavigate-replace-option-do

const PrivateRoute = () => {
  const { userInfo } = useSelector(state => state.auth)

  return userInfo ? <Outlet /> : <Navigate to='/login' replace/>
}

export default PrivateRoute