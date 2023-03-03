import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact } from "../../store/actions/ActionContact";

function ListContact() {
	const { getListContactResult, getListContactLoading, getListContactError } = useSelector((state) => state.DataKontak);
	const disp = useDispatch();
	useEffect(() => {
		// Call GET_LIST_CONTACT
		disp(getListContact());
	}, [disp]);
	return (
		<div>
			<h4 className="mb-3 font-bold">Contact List</h4>
			<table className="border max-w-lg w-full">
				<thead className="bg-gray-200">
					<tr>
						<th className="p-3">Nama</th>
						<th className="p-3">No. Hp</th>
					</tr>
				</thead>
				<tbody>
					{getListContactResult
						? getListContactResult.map((kontak) => {
								return (
									<tr key={kontak.id} className="border-t">
										<td className="p-2 border-r">{kontak.nama}</td>
										<td className="p-2">{kontak.nohp}</td>
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
