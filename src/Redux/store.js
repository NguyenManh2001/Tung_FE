
import {configureStore} from '@reduxjs/toolkit';
import filterSlice from "./filters/filters";
import listscarSlice from "./list/list";
const Store = configureStore({
   reducer:{ 
     filter: filterSlice.reducer,
    listCar:listscarSlice.reducer,
  },
});
export default Store;