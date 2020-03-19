import { combineReducers } from 'redux'
import routes from './routes';
import profile from './profiles'

const rootReducer = combineReducers({
  routes, // equivalente a routes: routes
  profile, // equivalente a profiles: profiles
})

export default rootReducer;
