import { createSlice } from '@reduxjs/toolkit';
import ISliceOfCakeEntity from '../../../entity/SliceOfCake.entity';

const initialState: ISliceOfCakeEntity = {
    calories: 270,
    weight: 200,
    proteins: 23,
    fats: 3,
    carbs: 36
}

export const sliceOfCakeSlice = createSlice({
	name: 'sliceOfCake',
	initialState,
	reducers: {
		setSliceOfCake: (_state, action) => {
			return { ...action.payload };
		},
	},
});

export const { setSliceOfCake } = sliceOfCakeSlice.actions;
export default sliceOfCakeSlice.reducer;