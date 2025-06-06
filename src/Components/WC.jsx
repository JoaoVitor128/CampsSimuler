import { useState } from 'react';
import { realChampionsData, selecionsData } from '../Data/WCData';
import './table.css';
import './WC.css'

const Table = () => {
    const [nextYears, setNextYears] = useState([]);
    const [year, setYear] = useState(2022);
    const [champions, setChampions] = useState(realChampionsData);

    const [campSel, setCampSel] = useState("Argentina")
    const [viceSel, setViceSel] = useState("França")

    const [goalsChamp, setGoalsChamp] = useState(3)
    const [goalsVice, setGoalsVice] = useState(3)

    const [originCountry, setOriginCountry] = useState("Qatar")

    const [prevRankings, setPrevRankings] = useState([]);

    function addTable(newSelecion, newYear) {
        champions.sort((a, b) => b.years.length - a.years.length)
        setChampions(prev => {
            const existing = prev.find(sel => sel.selecion === newSelecion);

            if (existing) {
                return prev.map(sel =>
                    sel.selecion === newSelecion
                        ? { ...sel, years: [...sel.years, newYear], finals: sel.finals + 1 }
                        : sel
                );
            } else {
                return [...prev, { selecion: newSelecion, years: [newYear], finals: 1 }];
            }
        });
        console.log(champions)
    }


    function generateCup() {

        setOriginCountry(selecionsData[Math.floor(Math.random() * selecionsData.length)])

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

        console.log(champSelecion, randomIndex);

        setCampSel(champSelecion)
        setViceSel(viceSelecion)

        setGoalsChamp(randomGoal)
        setGoalsVice(randomAnotherGoal)

        const previousRanking = [...champions]
            .sort((a, b) => b.years.length - a.years.length)
            .map(sel => sel.selecion);

        setPrevRankings(previousRanking);

        addTable(champSelecion, newYear);

        realChampionsData.sort()
    }

    return (
        <div className='wc'>
            <button className='generateButton' onClick={generateCup}>Gerar Próxima Copa</button>
            <p>{year}</p>
            <h3>
                🏆 {campSel} (
                {(() => {
                    const currentRanking = [...champions]
                        .sort((a, b) => b.years.length - a.years.length)
                        .map(sel => sel.selecion);

                    const currentPos = currentRanking.findIndex(sel => sel === campSel) + 1;
                    const prevPos = prevRankings.findIndex(sel => sel === campSel) + 1;

                    return prevPos && prevPos !== currentPos
                        ? `${prevPos}º → ${currentPos}º lugar`
                        : `${currentPos}º lugar`;
                })()}
                )
            </h3>
            <div className="infos">
                <p>Final:</p>
                <p>{campSel} {goalsChamp} - {goalsVice} {viceSel}</p>
                <p>País Sede: {originCountry}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Seleção</th>
                        <th>Titulos</th>
                        <th className='year'>Anos</th>
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
                                <td className='year'>{selecion.years.join(", ")}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <footer>
                <p>Jaum Programações, © Todos Os Direitos Reservados, V4.0</p>
            </footer>
        </div>
    );
};

export default Table;
