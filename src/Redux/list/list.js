// const initState = {
//     listscar: [],
//   };


// const listscarReducer = (state= initState,action) => {
//     console.log({state,action})
//      switch(action.type){
//         case 'listCar/addListcar':
//             return {
//                 ...state,
//                 listscar: action.payload,
//               };
//         default:
//             return state;
//      }
// }   
// export default listscarReducer;


import {createSlice} from '@reduxjs/toolkit';
const listscarSlice  = createSlice({
      name:"listCar",
      initialState:{listscar:[]},
      reducers:{
        addListcar:(state,action) => {
         state.listscar = action.payload
        },
      },
})
export default listscarSlice;