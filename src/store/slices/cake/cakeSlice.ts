import { createSlice } from '@reduxjs/toolkit';
import { ICakeEntity } from '../../../entity';

const initialState: ICakeEntity = {
    name: 'Carrot Cake',
    slicesCount: 8,
    sliceType: {
        calories: 270,
	    weight: 200,
	    proteins: 23,
	    fats: 3,
	    carbs: 36
    }
}

export const cakeSlice = createSlice({
	name: 'cake',
	initialState,
	reducers: {
        cutCake: (_state, action) => {
			return { ...action.payload };
		},
		eatCake: (_state, action) => {
			return { ...action.payload };
		},
        newCake: () => {
			return initialState;
		},
	},
});


export const { cutCake, eatCake, newCake } = cakeSlice.actions;
export default cakeSlice.reducer;