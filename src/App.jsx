import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
    const [count, setCount] = useState(0);

    const data = {
        name: "Jeba Atkia Maisha",
        education: [
            {
                institute: "University of Manitoba",
                location: "Winnipeg, Manitoba, Canada",
                degree: "Master of Science in Immunology",
                period: "Sep 2023 - Present",
            },
            {
                institute: "BRAC University",
                location: "Dhaka, Bangladesh",
                degree: "Bachelor of Science in Biotechnology",
                period: "Oct 2020",
                grade: "CGPA: 3.95",
            },
        ],
    };

    return (
        <div className="main">
            <div className="page_left">Jeba</div>
        </div>
    );
}

export default App;
