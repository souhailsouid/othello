import axios from 'axios'
const baseUrl = 'http://localhost:9000'


export const getAllGamesOnline = () => {
  return axios.get(`${baseUrl}/api/games`)
}
export const getAllGamesIA = () => {
  return axios.get('http://localhost:9000/api/games/gameia')
}
export const getGameIAByID = (id) => {
  return axios.get(`http://localhost:9000/api/games/ia/${id}`)
}

export const PostPositionIA = (id) => {
  return axios.put(`http://localhost:9000/api/games/ia/${id}`)
}
