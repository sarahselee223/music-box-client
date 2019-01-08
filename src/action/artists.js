import axios from 'axios'
export const GET_ARTIST = 'GET_ARTIST'
export const ADD_ARTIST = 'ADD_ARTIST'
export const REMOVE_ARTIST = 'REMOVE_ARTIST'

export function getArtists(){
    return (dispatch) => {
        axios.get(`http://localhost:5000/artists`)
        .then(res => dispatch({
            type: GET_ARTIST,
            payload: res.data
        }))
        .catch(err => {
            console.log(err)
        })
    }
}

export function addArtist(newArtist){
    return (dispatch) => {
        axios.post(`http://localhost:5000/artists`, newArtist)
        .then(res => {
            dispatch(getArtists())
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function removeArtist(id){
    return (dispatch) => {

        axios.delete(`http://localhost:5000/artists/${id}`)
        .then(res => {
            dispatch(getArtists())
        })
        .catch(err => {
            console.log(err)
        })

    }
}

