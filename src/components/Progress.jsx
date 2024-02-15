
import { useState } from 'react';

export default function Progress() {

	// Genera l'array dei giorni dell'anno
	const daysOfYear = Array.from({ length: 365 }, (_, index) => index + 1);

	// Stato per tracciare il giorno selezionato
	const [selectedDay, setSelectedDay] = useState(null);

	// Funzione per gestire la selezione di un giorno
	const handleDayClick = (day) => {
		setSelectedDay(day);
	};


	return <section className="flex flex-col mt-9 flex-wrap gap-1 w-1 h-40" >

		<h2></h2>

		{daysOfYear.map(day => (
			<div
				key={day}
				className={`day ${selectedDay === day ? 'selected' : ''} rounded bg-gray-900 p-2`}
				onClick={() => handleDayClick(day)}
			>
				{}
			</div>
		))}

	</section>
}