import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact, deleteContact } from "../../store/actions/ActionContact";

function ListContact() {
	const { getListContactResult, getListContactLoading, getListContactError, deleteContactResult } = useSelector((state) => state.DataKontak);
	const disp = useDispatch();

	useEffect(() => {
		// Call GET_LIST_CONTACT
		disp(getListContact());
	}, [disp]);

	useEffect(() => {
		if (deleteContactResult) {
			disp(getListContact());
		}
	}, [deleteContactResult, disp]);

	return (
		<div>
			<h4 className="mb-3 font-bold">Contact List</h4>
			<table className="border max-w-lg w-full">
				<thead className="bg-gray-200">
					<tr>
						<th className="p-3">Nama</th>
						<th className="p-3">No. Hp</th>
						<th className="p-3">Event</th>
					</tr>
				</thead>
				<tbody>
					{getListContactResult
						? getListContactResult.map((kontak) => {
								return (
									<tr key={kontak.id} className="border-t">
										<td className="p-2 border-r">{kontak.nama}</td>
										<td className="p-2 border-r">{kontak.nohp}</td>
										<td className="p-2 text-center">
											<button onClick={() => disp(deleteContact(kontak.id))} className="py-1 px-3 bg-red-500 text-white rounded">
												Delete
											</button>
										</td>
									</tr>
								);
						  })
						: getListContactLoading
						? "<tr><td colspan=2>Loading data...</td></tr>"
						: `<tr>${getListContactError ? getListContactError : "<td colspan=2>Data Kosong!</td>"}</tr>`}
				</tbody>
				<tfoot></tfoot>
			</table>
		</div>
	);
}

export default ListContact;
