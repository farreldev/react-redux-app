import { FormContact, ListContact } from "./components";

function App() {
	return (
		<div className="py-5 max-w-7xl w-full mx-auto">
			<h3 className="text-3xl font-semibold font-sans leading-relaxed">Contacts Application</h3>
			<hr />
			<FormContact />
			<ListContact />
		</div>
	);
}

export default App;
