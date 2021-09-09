import axios from "axios"
import {GET_ERRORS, GET_INFO, GET_STOREDINFO, DELETE_INFO} from "./types";

export const createInfo = (info, history) => async dispatch => {
    try {
       await axios.post(`https://ikenna-portfolio-java.herokuapp.com/admin/info`, info)
        history.push(`/`);
        dispatch({
            type:GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        })
        console.log(error)
    }
}


export const getInfo = () => async dispatch => {
  const res = await axios.get(`https://ikenna-portfolio-java.herokuapp.com/api/info/all`)

        dispatch({
            type: GET_INFO,
            payload: res.data
    
     } )   
    
};

export const getStoredInfo = (infoId, history) => async dispatch => {
   try {
    const res = await axios.get(`https://ikenna-portfolio-java.herokuapp.com/api/info/${infoId}`)
    dispatch({
        type: GET_STOREDINFO,
        payload: res.data,
    })
   } catch (error) {
       history.push("/");
   }
};

export const deleteInfo = id => async dispatch => {
    if(window.confirm("This will delete data Permanent"))
    {
        await axios.delete(`https://ikenna-portfolio-java.herokuapp.com/admin/info/${id}`)
    dispatch({
        type: DELETE_INFO,
        payload: id
    })
    }
        
};




