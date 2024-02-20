import { useState } from "react";
import "./style/App.css";
import Progress from "./components/Progress.jsx";
import SettingsBar from "./components/SettingsBar.jsx";

function App() {

	const [progress, setProgress] = useState()

	let actualday = { value: 0}

    function handleProgress() {
        setProgress( prev => {
			...prev,
            actualDay.value ++
        })
    }


    return (
        <main className="bg-zinc-950 w-screen h-screen text-slate-100 font-rubik flex justify-center ">
            <section className="w-[60rem]  h-full p-8">
                <h1 className="text-3xl font-bold">MeliorMe</h1>

                <SettingsBar setProgress={() => handleProgress}></SettingsBar>

                <Progress titleProgress={"Workout progress"}></Progress>
                <Progress titleProgress={"English Lesson"}></Progress>
                <Progress titleProgress={"Programming"}></Progress>
            </section>
        </main>
    );
}

export default App;
