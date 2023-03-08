import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact, deleteContact, editContact } from "../../store/actions/ActionContact";

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
			<div className="border w-full">
				<div className="bg-gray-200">
					<div className="grid grid-cols-3 text-center">
						<div className="p-3">Nama</div>
						<div className="p-3">No. Hp</div>
						<div className="p-3">Event</div>
					</div>
				</div>
				<div>
					{getListContactResult
						? getListContactResult.map((kontak) => {
								return (
									<div key={kontak.id} className="grid grid-cols-3 border-t">
										<div className="p-2 border-r flex-1">{kontak.nama}</div>
										<div className="p-2 border-r flex-1 text-right">{kontak.nohp}</div>
										<div className="p-2 text-center flex-1">
											<div className="flex space-x-2 justify-center">
												<button onClick={() => disp(deleteContact(kontak.id))} className="py-1 px-3 bg-red-500 text-white rounded">
													Delete
												</button>
												<button onClick={() => disp(editContact(kontak))} className="py-1 px-3 bg-blue-500 text-white rounded">
													Edit
												</button>
											</div>
										</div>
									</div>
								);
						  })
						: getListContactLoading
						? "<div><div colspan=2>Loading data...</div></div>"
						: `<div>${getListContactError ? getListContactError : "<div colspan=2>Data Kosong!</div>"}</div>`}
				</div>
			</div>
		</div>
	);
}

export default ListContact;
