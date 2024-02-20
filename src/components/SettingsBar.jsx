


export default function SettingsBar({setProgress}) {
	return <section className=" my-6 p-4">
		<button
			className="bg-cyan-950 p-2 rounded shadow hover:bg-slate-900"
			onClick={setProgress}
		>Workout</button>
	</section>
}