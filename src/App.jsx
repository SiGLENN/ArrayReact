import './index.css';
import Employee from './components/People';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const [people, setPeople] = useState([
    {
        id: 1,
        name: 'Dota 2',
        role: 'MOBA (Multiplayer Online Battle Arena)',
        img: 'https://i.pinimg.com/originals/8a/8b/50/8a8b50da2bc4afa933718061fe291520.jpg',
        link: 'www.dota2.com/home',
    },
    {
        id: 2,
        name: 'Mobile Legends',
        role: 'MOBA (Multiplayer Online Battle Arena)',
        img: 'https://contents.spin.ph/image/resize/image/2020/09/09/ml-oldlogo-1599651659.webp',
        link: 'm.mobilelegends.com/',
    },
    {
        id: 3,
        name: 'League of Legends',
        role: 'MOBA (Multiplayer Online Battle Arena)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwc7LTMpJNkHf7EKncnObWLf49ghrWsUy5Q&s',
        link: 'www.leagueoflegends.com/en-ph/',
    },
    {
        id: 4,
        name: 'Counter-Strike 2',
        role: 'FPS (First-Person Shooter)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVs8ylIEks-VBGmpUzHikPqucWo-GvXZBPA&s',
        link: 'www.counter-strike.net/cs2',
    },
    {
        id: 5,
        name: 'Valorant',
        role: 'FPS (First-Person Shooter)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnl0iESfLjoSuDiaDzn6wzaEPCSdL_qFrLKw&s',
        link: 'playvalorant.com/en-sg/',
    },
    {
        id: 6,
        name: 'Genshin Impact',
        role: 'ARPG (Action Role-Playing Game)',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPHpfe_BWDsR7RJ0DLCcrGrc3Mu6tBWprhQ&s',
        link: 'genshin.hoyoverse.com/en/home',
    },
  ]);

  const showPeople = true;

  return (
    <>
    <div className="App">
      {showPeople ? (
        <>
          <div className="flex">
            {people
              .map((people) => {
                return (
                  <Employee
                    key={people.id}
                    name={people.name}
                    role={people.role}
                    img={people.img}
                    link={people.link}
                  />
                );
              })}
          </div>
        </>
      ) : (
        <p>No Game found.</p>
      )}
    </div>
    </>
  );
}

export default App;
