import axios from 'axios';

const URL = 'http://localhost:3000'

export function getStates(){
  let statesUrl = `${URL}/api/states`
  return axios.get(statesUrl).then(
    (res) => {
      return res.data;
    }
  )
}