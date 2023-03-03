import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getListContact } from "../../store/actions/ActionContact";

function FormContact() {
	const [nama, setNama] = useState("");
	const [nohp, setNohp] = useState("");
	const { addContactResult } = useSelector((state) => state.DataKontak);
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ nama: nama, nohp: nohp });
		if (nama && nohp) {
			dispatch(addContact({ nama, nohp }));
			setNama("");
			setNohp("");
		}
	};
	useEffect(() => {
		if (addContactResult) {
			console.log("5. Component did update");
			return dispatch(getListContact());
		}
	}, [addContactResult, dispatch]);
	return (
		<div className="border-b py-3 mb-3">
			<h4 className="mb-3 font-bold">Add Contact</h4>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col space-y-1">
					<div className="flex items-center space-x-3">
						<label htmlFor="nama" className="max-w-[90px] w-full">
							Nama
						</label>
						<div className="border p-2">
							<input type="text" className="focus:outline-none" placeholder="Name..." value={nama} name="nama" onChange={(e) => setNama(e.target.value)} />
						</div>
					</div>
					<div className="flex items-center space-x-3">
						<label htmlFor="nohp" className="max-w-[90px] w-full">
							No. Hp
						</label>
						<div className="border p-2">
							<input type="text" className="focus:outline-none" placeholder="No Hp..." value={nohp} name="nohp" onChange={(e) => setNohp(e.target.value)} />
						</div>
					</div>
					<div className="py-3">
						<button type="submit" className="bg-black text-white py-2 px-5">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default FormContact;
