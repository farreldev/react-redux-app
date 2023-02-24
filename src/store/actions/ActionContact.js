import axios from "axios";
export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const getListContact = () => {
	console.log("2. Masuk Action");
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
			url: "http://localhost:9090/kontaks",
			timeout: 120000,
		})
			.then((response) => {
				console.log("3. Berhasil dapet data: ", response);
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
				console.log("3. Gagal dapet data: ", error);
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
