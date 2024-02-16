
import { useState } from 'react';

export default function Progress({titleProgress}) {

	// Genera l'array dei giorni dell'anno
	const daysOfYear = Array.from({ length: 365 }, (_, index) => index + 1);

	// Stato per tracciare il giorno selezionato
	const [selectedDay, setSelectedDay] = useState(null);

	// Funzione per gestire la selezione di un giorno
	const handleDayClick = (day) => {
		setSelectedDay(day);
	};


	return (

	<section className="mt-9">

		<h2 className="my-4">{titleProgress}</h2>

		<div className="flex flex-col flex-wrap gap-1 w-1 h-32" >

			{daysOfYear.map(day => (
				<div
					key={day}
					className={`day ${selectedDay === day ? 'selected' : ''} rounded-sm bg-gray-900 w-3 h-3`}
					onClick={() => handleDayClick(day)}
				>
					{}
				</div>
			))}

		</div>

	</section>
	)
}