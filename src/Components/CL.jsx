import { useState } from 'react';
import { realChampionsData, selecionsData } from '../Data/CL';
import './table.css';
import './WC.css';

const Table = () => {
    const [nextYears, setNextYears] = useState([]);
    const [year, setYear] = useState(2024);
    const [champions, setChampions] = useState(realChampionsData);

    const [champClub, setChampClub] = useState("Real Madrid");
    const [viceClub, setViceClub] = useState("Manchester City");

    const [goalsChamp, setGoalsChamp] = useState(2);
    const [goalsVice, setGoalsVice] = useState(1);

    const [prevRankings, setPrevRankings] = useState([]);

    function addTable(newClub, newYear) {
        champions.sort((a, b) => b.years.length - a.years.length);
        setChampions(prev => {
            const existing = prev.find(club => club.club === newClub);

            if (existing) {
                return prev.map(club =>
                    club.club === newClub
                        ? { ...club, years: [...club.years, newYear], finals: club.finals + 1 }
                        : club
                );
            } else {
                return [...prev, { club: newClub, years: [newYear], finals: 1 }];
            }
        });
        console.log(champions)
    }

    function generateChampions() {
        const newYear = year + 1;
        setYear(newYear);
        setNextYears(prev => [...prev, newYear]);

        const randomIndex = Math.floor(Math.random() * selecionsData.length);
        let randomAnotherIndex = Math.floor(Math.random() * selecionsData.length);
        while (randomAnotherIndex === randomIndex) {
            randomAnotherIndex = Math.floor(Math.random() * selecionsData.length);
        }

        const champ = selecionsData[randomIndex];
        const vice = selecionsData[randomAnotherIndex];

        const randomGoal = Math.floor(Math.random() * (4 - 1)) + 2;
        const randomViceGoal = Math.floor(Math.random() * (randomGoal));

        setChampClub(champ);
        setViceClub(vice);

        setGoalsChamp(randomGoal);
        setGoalsVice(randomViceGoal);

        const previousRanking = [...champions]
            .sort((a, b) => b.years.length - a.years.length)
            .map(club => club.club);

        setPrevRankings(previousRanking);
        addTable(champ, newYear);
    }

    return (
        <div className='wc'>
            <button className='generateButton' onClick={generateChampions}>Gerar Próxima Champions</button>
            <p>{year}</p>
            <h3>
                🏆 {champClub} (
                {(() => {
                    const currentRanking = [...champions]
                        .sort((a, b) => b.years.length - a.years.length)
                        .map(club => club.club);

                    const currentPos = currentRanking.findIndex(club => club === champClub) + 1;
                    const prevPos = prevRankings.findIndex(club => club === champClub) + 1;

                    return prevPos && prevPos !== currentPos
                        ? `${prevPos}º → ${currentPos}º lugar`
                        : `${currentPos}º lugar`;
                })()}
                )
            </h3>
            <div className="infos">
                <p>Final:</p>
                <p>{champClub} {goalsChamp} - {goalsVice} {viceClub}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>club</th>
                        <th>Títulos</th>
                        <th>Finais</th>
                        <th className='year'>Anos</th>
                    </tr>
                </thead>
                <tbody>
                    {[...champions]
                        .sort((a, b) => b.years.length - a.years.length)
                        .map((club, id) => (
                            <tr key={id} className='tDefault'>
                                <td>{id + 1}º</td>
                                <td>{club.club}</td>
                                <td>{club.years.length ? club.years.length : 0}</td>
                                <td>{club.finals}</td>
                                <td className='year'>{club.years.join(", ")}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
