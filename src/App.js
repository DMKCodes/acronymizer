import { useState, useEffect } from 'react';
import { words } from './WORDS';
import './App.css';

function App() {
    const [acronym, setAcronym] = useState([]);

    const generateAcronym = () => {
        const newAcronym = [];
        for (const letter in words) {
            const wordsList = words[letter];
            const index = Math.floor(Math.random() * words.length);
            newAcronym.push(wordsList[index]);
        }
        setAcronym(newAcronym);
    };

    useEffect(() => {
        generateAcronym();
    }, []);

    return (
        <div className="App">

        </div>
    );
}

export default App;
