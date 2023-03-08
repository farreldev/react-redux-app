import axios from "axios";
export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getListContact = () => {
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

export const addContact = (data) => {
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

export const deleteContact = (id) => {
	console.log("2. Masuk Action");
	return (dispatch) => {
		// Loading
		dispatch({
			type: DELETE_CONTACT,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});
		// Get API
		axios({
			method: "DELETE",
			url: `http://localhost:3000/kontaks/${id}`,
			timeout: 120000,
		})
			.then((response) => {
				console.log("3. Berhasil input data: ", response.data);
				// Success Get API
				dispatch({
					type: DELETE_CONTACT,
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
					type: DELETE_CONTACT,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const editContact = (data) => {
	return (dispatch) => {
		dispatch({
			type: EDIT_CONTACT,
			payload: { data },
		});
	};
};

export const updateContact = (data) => {
	return (dispatch) => {
		// Loading
		dispatch({
			type: UPDATE_CONTACT,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});
		// Get API
		axios({
			method: "PUT",
			url: `http://localhost:3000/kontaks/${data.id}`,
			timeout: 120000,
			data: data,
		})
			.then((response) => {
				// Success Get API
				dispatch({
					type: UPDATE_CONTACT,
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
					type: UPDATE_CONTACT,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
