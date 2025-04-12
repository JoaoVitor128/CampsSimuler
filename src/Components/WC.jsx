import { useState } from 'react';
import { realChampionsData, selecionsData } from '../Data/WCData';
import './table.css';

const Table = () => {
    const [nextYears, setNextYears] = useState([]);
    const [year, setYear] = useState(2022);
    const [champions, setChampions] = useState(realChampionsData);

    const [campSel, setCampSel] = useState("Argentina")
    const [viceSel, setViceSel] = useState("França")

    const [goalsChamp, setGoalsChamp] = useState(3)
    const [goalsVice, setGoalsVice] = useState(3)

    function addTable(newSelecion, newYear) {
        setChampions(prev => {
            const existing = prev.find(sel => sel.selecion === newSelecion);

            if (existing) {
                return prev.map(sel =>
                    sel.selecion === newSelecion
                        ? { ...sel, years: [...sel.years, newYear] }
                        : sel
                );
            } else {
                return [...prev, { selecion: newSelecion, years: [newYear] }];
            }
        });
    }


    function generateCup() {
        const newYear = year + 4;
        setYear(newYear);
        setNextYears(prev => [...prev, newYear]);

        const randomIndex = Math.floor(Math.random() * selecionsData.length);
        const randomAnotherIndex = Math.floor(Math.random() * selecionsData.length);

        const champSelecion = selecionsData[randomIndex];
        const viceSelecion = selecionsData[randomAnotherIndex]

        const randomGoal = Math.floor(Math.random() * (5 - 2)) + 1
        const randomGoalVerify = randomGoal === 1 ? 0 : randomGoal

        const randomAnotherGoal = Math.floor(Math.random() * randomGoalVerify);

        console.log(champSelecion);

        setCampSel(champSelecion)
        setViceSel(viceSelecion)

        setGoalsChamp(randomGoal)
        setGoalsVice(randomAnotherGoal)

        addTable(champSelecion, newYear);

        realChampionsData.sort()
    }

    return (
        <div>
            <button className='generateButton' onClick={generateCup}>Gerar Próxima Copa</button>
            <p>{year}</p>
            <p>Final:</p>
            <p>{campSel} {goalsChamp} - {goalsVice} {viceSel}</p>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Seleção</th>
                        <th>Titulos</th>
                        <th>Anos</th>
                    </tr>
                </thead>
                <tbody>
                    {[...champions]
                        .sort((a, b) => b.years.length - a.years.length)
                        .map((selecion, id) => (
                            <tr key={id} className='tDefault'>
                                <td>{id + 1}º</td>
                                <td>{selecion.selecion}</td>
                                <td>{selecion.years.length}</td>
                                <td>{selecion.years.join(", ")}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
