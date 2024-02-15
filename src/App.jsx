import { useState } from "react";
import "./style/App.css";
import Progress from "./components/Progress.jsx";

function App() {
  return (
    <main className="bg-zinc-950 w-screen h-screen text-slate-100 font-rubik flex justify-center ">
        <section className="w-[60rem]  h-full border p-8">
            <h1 className="text-3xl font-bold">MeliorMe</h1>

            <Progress></Progress>
        </section>
    </main>
  );
}

export default App;
