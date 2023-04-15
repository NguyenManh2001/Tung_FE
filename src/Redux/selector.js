import { createSelector } from '@reduxjs/toolkit'

export const searchSelector = (state) => state.filter.search;
export const listSelector = (state) => state.listCar.listscar;
export const loginSelector = (state) => state.filter.login;
// export const tokenSelector = (state) => state.filter.token;
export const searchitemSelector = createSelector(listSelector,searchSelector,(listcars,searchValue) => {
  if (!listcars) {
    return [];
  }
  console.log(listcars);
  return listcars.filter((listcar) => {
    return listcar.name.includes(searchValue)
  })
})