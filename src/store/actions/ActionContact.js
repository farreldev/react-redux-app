import axios from "axios";
export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";

export const getListContact = (dispatch) => {
	return (dispatch) => {
		// Loading
		dispatch({
			type: GET_LIST_CONTACT,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});
		// Get API
		axios({
			method: "GET",
			url: "http://localhost:3000/kontaks",
			timeout: 120000,
		})
			.then((response) => {
				// Success Get API
				dispatch({
					type: GET_LIST_CONTACT,
					payload: {
						loading: false,
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch((error) => {
				// Unsuccess Get API
				dispatch({
					type: GET_LIST_CONTACT,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const addContact = (dispatch, data) => {
	console.log("2. Masuk Action");
	return (dispatch) => {
		// Loading
		dispatch({
			type: ADD_CONTACT,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});
		// Get API
		axios({
			method: "POST",
			url: "http://localhost:3000/kontaks",
			timeout: 120000,
			data: data,
		})
			.then((response) => {
				console.log("3. Berhasil input data: ", response);
				// Success Get API
				dispatch({
					type: ADD_CONTACT,
					payload: {
						loading: false,
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch((error) => {
				// Unsuccess Get API
				console.log("3. Gagal input data: ", error.message);
				dispatch({
					type: ADD_CONTACT,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
