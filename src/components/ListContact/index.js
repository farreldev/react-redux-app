import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListContact } from "../../store/actions/ActionContact";

function ListContact() {
	const disp = useDispatch();
	useEffect(() => {
		// Call GET_LIST_CONTACT
		console.log("1. useEffect component did mount");
		disp(getListContact());
	}, [disp]);
	return (
		<div>
			<h4>Contact List</h4>
		</div>
	);
}

export default ListContact;
