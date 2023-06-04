import {createSlice} from "@reduxjs/toolkit";
import {InitialState} from "../../types/type";



const initialState: InitialState = {
  q: undefined,
  minIngredients: undefined,
  maxIngredients: undefined,
  diet: undefined,
  health: undefined,
  cuisineType: undefined,
  mealType: undefined,
  dishType: undefined,
  minCalories: undefined,
  maxCalories: undefined,
  minTime: undefined,
  maxTime: undefined
}
const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    updateFormData: (state, action)  => {
      state.q = action.payload.q
      state.maxTime = action.payload.maxTime
      state.minTime = action.payload.minTime
      state.diet = action.payload.diet
      state.health = action.payload.health
      state.maxCalories = action.payload.maxCalories
      state.minCalories = action.payload.minCalories
      state.maxIngredients = action.payload.maxIngredients
      state.minIngredients = action.payload.minIngredients
      state.mealType = action.payload.mealType
      state.dishType = action.payload.dishType
      state.cuisineType = action.payload.cuisineType
    }
  }
})

export default formSlice.reducer
export const {updateFormData} = formSlice.actions