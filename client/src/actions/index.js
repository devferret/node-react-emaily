import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = _ => async dispatch => {
  const user = await axios.get('/api/current_user')
  dispatch({ 
    type: FETCH_USER, 
    payload: user.data
  })
}

export const handleToken = token => async dispatch => {
  const user = await axios.post('/api/stripe', token)
  dispatch({
    type: FETCH_USER,
    payload: user.data
  })
}