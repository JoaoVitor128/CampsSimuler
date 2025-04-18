import { useState } from 'react'
import './table.css'
import './bras.css'

import { teamsData } from "../Data/BrasData"

const Brasileirao = () => {
    const [matches, setMatches] = useState([]);
    const [roundsPlayed, setRoundsPlayed] = useState(0)

    function updateTable() {

    }

    function generateRound() {
        if (roundsPlayed >= 38) {
            alert("Você ja jogou todas as rodadas")
            return
        }
        const newMatches = [];
        const chooses = [...teamsData].sort(() => Math.random() - 0.5);
        for (let i = 0; i < chooses.length; i += 2) {
            const teamA = chooses[i];
            const teamB = chooses[i + 1];
            const golsA = Math.floor(Math.random() * 5);
            const golsB = Math.floor(Math.random() * 5);

            if (golsA > golsB) {
                teamA.pts += 3;
            } else if (golsB > golsA) {
                teamB.pts += 3;
            } else {
                teamA.pts += 1;
                teamB.pts += 1;
            }

            teamA.sg += golsA - golsB;
            teamB.sg += golsB - golsA;

            teamA.j++;
            teamB.j++;

            newMatches.push({
                teamA: teamA.team,
                golsA,
                golsB,
                teamB: teamB.team
            });

            updateTable();
        }

        setRoundsPlayed(roundsPlayed + 1);
        setMatches(prev => [newMatches]);

    }

    function classGenerate(pos) {
        if (pos === 1) return "camp";
        if (pos >= 2 && pos <= 4) return "lib";
        if (pos === 5 || pos === 6) return "eli";
        if (pos >= 7 && pos <= 12) return "sul";
        if (pos >= 13 && pos <= 16) return "tDefault";
        if (pos >= 17 && pos <= 20) return "reb";
        return "";
    }


    return (
        <div className='bras'>
            <button className='generateButton' onClick={generateRound}>Gerar Próxima Rodada</button>
            <div className="table">

                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Clube</th>
                            <th className='gamesInfo'>Jogos</th>
                            <th>Pontos</th>
                            <th className='sg'>Saldo de Gols</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...teamsData]
                            .sort((a, b) => b.pts - a.pts)
                            .map((team, id) => (
                                <tr key={id} className={classGenerate(id + 1)}>
                                    <td>{id + 1}º</td>
                                    <td>{team.team}</td>
                                    <td className='gamesInfo'>{team.j}</td>
                                    <td>{team.pts}</td>
                                    <td className='sg'>{team.sg}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="games">
                    <h2>Jogos por Rodada</h2>
                    {matches.map((round, index) => (
                        <div key={index} className="round">
                            <h3>Rodada {roundsPlayed}</h3>
                            <ul>
                                {round.map((match, i) => (
                                    <li key={i}>
                                        {match.teamA} {match.golsA} x {match.golsB} {match.teamB}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <footer>
                <p>Jaum Programações, © Todos Os Direitos Reservados, V4.0</p>
            </footer>
        </div>
    )
}

export default Brasileirao