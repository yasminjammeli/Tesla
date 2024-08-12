import {creareSlice} from "@reduxjs/toolkit"

const initiaState = {
    cars : ["Model S" , "Model 3 " , "Model X" , "Model Y"]

}

const carSlice = creareSlice({
    name :  "car",
    initialState,
    reducers: {}
})
export const selectCars = state => state.car.cars

export default carSlice.reducer