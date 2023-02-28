import { GET_LIST_CONTACT } from "../../actions/ActionContact";
const initialState = {
	getListContactResult: false,
	getListContactLoading: false,
	getListContactError: false,
};

const Kontak = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_CONTACT:
			console.log("4. Masuk Reducer", action);
			return { ...state, getListContactResult: action.payload.data, getListContactLoading: action.payload.loading, getListContactError: action.payload.errorMessage };
		default:
			return state;
	}
};

export default Kontak;
