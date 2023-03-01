import React, { useState } from "react";

function FormContact() {
	const [nama, setNama] = useState("");
	const [nohp, setNohp] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ nama, nohp });
		// addContact(dispatch, { nama, nohp });
	};
	return (
		<div className="border-b py-3 mb-3">
			<h4 className="mb-3 font-bold">Add Contact</h4>
			<form onSubmit={(event) => handleSubmit(event)}>
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
