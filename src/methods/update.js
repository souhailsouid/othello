
import axios from 'axios'


export const configuration = (state) => {

  const elements = {
    savePositions: state.savePositions,
    saveScorePlayer1: state.xNumbersSaving,
    saveScoreIA: state.oNumbersSaving
  }
  return elements
}



export const handleUpdate = (state, id, updateState) => {
    const elements = {
        savePositions: state.savePositions,
      }
  axios.put(`http://localhost:9000/api/games/ia/${id}`,configuration(state))
    .then((data) => {


console.log( elements)

      state.gameByID =  data.data
      

      

      const updatedObj = {
        ...state.gameByID

     
      }
      const updatedContactUtiles = [
        updatedObj
      ]
      console.log('csssss',updatedContactUtiles)
console.log('updateobj', updatedObj)
      updateState({  gameByID: updatedObj })
    })
    .catch((err) => console.log(err))

}