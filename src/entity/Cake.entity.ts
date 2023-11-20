import ISliceOfCakeEntity from "./SliceOfCake.entity";

interface ICakeEntity {
	name: string;
	slicesCount: number;
    sliceType: ISliceOfCakeEntity;
}

export default ICakeEntity;
