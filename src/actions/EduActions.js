import axios from "axios"
import { DELETE_EDU, GET_EDUCATION, GET_EDUS, GET_ERRORS } from "./types"

export const createEducation = (education, history) => async dispatch => {
    try {
        await axios.post(`https://ikenna-portfolio-java.herokuapp.com/admin/education`, education)
        history.push("/")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })

    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    }


}

export const getAllEducation = () => async dispatch => {
    const res = await axios.get("https://ikenna-portfolio-java.herokuapp.com/api/education/all")
    dispatch({
        type: GET_EDUS,
        payload: res.data,
       
    })
}

export const getStoredEdu = (id, history) => async dispatch => {
    try {
     const res = await axios.get(`https://ikenna-portfolio-java.herokuapp.com/admin/education/${id}`)
     dispatch({
         type: GET_EDUCATION,
         payload: res.data,
     })
    } catch (error) {
        history.push("/");
    }
 };
 
 export const deleteEdu = id => async dispatch => {
    if(window.confirm("This will delete data Permanent"))
    {
        await axios.delete(`https://ikenna-portfolio-java.herokuapp.com/admin/education/${id}`)
    dispatch({
        type: DELETE_EDU,
        payload: id
    })
    }
        
};

export const updateEducation = (education, history) => async dispatch => {
    try {
        await axios.post(`https://ikenna-portfolio-website.herokuapp.com/admin/education`, education)
        history.push("/")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })

    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    }
}