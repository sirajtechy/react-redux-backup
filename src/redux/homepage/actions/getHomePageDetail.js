import ajax from '../../../http/ajax'
import {SCHOOL_DETAIL_API} from '../../../constants'

export const REQUEST_SCHOOL_DETAIL_INFORMATION = 'REQUEST_SCHOOL_DETAIL_INFORMATION'
export const GET_SCHOOL_DETAIL_INFORMATION = 'GET_SCHOOL_DETAIL_INFORMATION'

// export const getSchoolDetails = () => {
//   console.log('I am in action file ')
//      dispatch => {
//       console.log('Inside Dispatch ...!')
//       ajax.get(SCHOOL_DETAIL_API).then(response => {
//         console.log('RESPONSE DATA :::',response)
//           return dispatch ({type: GET_SCHOOL_DETAIL_INFORMATION ,payload: response.data})
//       })
//     }
// }


// export function getSchoolDetails() {
//   return function action(dispatch) {
//     dispatch({ type: GET_SCHOOL_DETAIL_INFORMATION })
//     const request = ajax.get(SCHOOL_DETAIL_API)  
//     return request.then(
      
//       response => dispatch({type: GET_SCHOOL_DETAIL_INFORMATION ,payload: response.data})   
//     );
//   }
// }

export const testMe = (data) => {

  return dispatch => {
    dispatch({type: GET_SCHOOL_DETAIL_INFORMATION,data:data})
  }
}


// export const getSchoolDetails = async () => {
//   console.log('I am in action file ')
//   return function(dispatch, getState) {
//     console.log('Inside Dispatch ...!')
//     const response  = ajax.get(SCHOOL_DETAIL_API).then(response => {
//       console.log('RESPONSE DATA :::',response)
//         return dispatch ({type: GET_SCHOOL_DETAIL_INFORMATION ,payload: response.data})
//     })
//   }
// };