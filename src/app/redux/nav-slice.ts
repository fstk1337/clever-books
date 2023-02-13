import { createSlice } from '@reduxjs/toolkit';

export interface NavState {
    show: boolean;
    showCats: boolean;
}

const initialState: NavState = {
    show: false,
    showCats: true
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    enableShow: (state) => (
      {
        show: true,
        showCats: state.showCats
      }
    ),
    disableShow: (state) => (
      {
        show: false,
        showCats: state.show ? false : state.showCats
      }
    ),
    toggleShowCats: (state) => (
      {
        show: state.show,
        showCats: !state.showCats
      }
    ),
    disableShowCats: (state) => (
      {
        show: state.show,
        showCats: false
      }
    )
  }
})

export const { enableShow, disableShow, toggleShowCats, disableShowCats } = navSlice.actions;

export const navReducer = navSlice.reducer;