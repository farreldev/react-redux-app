import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact } from "../../store/actions/ActionContact";

function ListContact() {
	const { getListContactResult, getListContactLoading, getListContactError } = useSelector((state) => state.KontakReducer);
	const disp = useDispatch();
	useEffect(() => {
		// Call GET_LIST_CONTACT
		console.log("1. useEffect component did mount");
		disp(getListContact());
	}, [disp]);
	return (
		<div>
			<h4>Contact List</h4>
			{getListContactResult
				? getListContactResult.map((kontak) => {
						return (
							<p key={kontak.id}>
								{kontak.nama} - {kontak.nohp}
							</p>
						);
				  })
				: getListContactLoading
				? "<p>Loading data...</p>"
				: `<p>${getListContactError ? getListContactError : "Data Kosong!"}</p>`}
		</div>
	);
}

export default ListContact;
