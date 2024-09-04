import './index.css';
import Employee from './components/People';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const [people, setPeople] = useState([
    {
        id: 1,
        name: 'Cong Tv',
        role: 'Ph Youtuber',
        img: 'https://sgp1.digitaloceanspaces.com/storage.viyline.net/influencers/wznkT078uz-20211208.jpg',
        link: 'www.youtube.com/@CongTheVlogger',
    },
    {
        id: 2,
        name: 'MrBeast',
        role: 'Famous Youtuber',
        img: 'https://yt3.googleusercontent.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s900-c-k-c0x00ffffff-no-rj',
        link: 'www.youtube.com/@MrBeast',
    },
    {
        id: 3,
        name: 'Ser Geybin',
        role: 'Ph Youtuber',
        img: 'https://yt3.googleusercontent.com/vynSkowRZM48sjIccjVZ4IadJwUu8HcYggQGtAbAO4HqHtXVMwvzopRnLjoD_N2lCIhAvfkw2g=s900-c-k-c0x00ffffff-no-rj',
        link: 'www.youtube.com/@SerGeybin',
    },
    {
        id: 4,
        name: 'Cristiano Ronaldo',
        role: 'Youtuber/Soccer',
        img: 'https://yt3.googleusercontent.com/ytc/AIdro_mc7eEBFwMWSiVV7CYeWCKlc8bkLO9pKIlhApkejunj61M=s900-c-k-c0x00ffffff-no-rj',
        link: 'www.youtube.com/@cristiano',
    },
    {
        id: 5,
        name: 'Ivana Alawi',
        role: 'Ph Youtuber',
        img: 'https://yt3.googleusercontent.com/ytc/AIdro_liNoc-J11Rg8j7CE7nbGQu4DpEahGrdXLQ7HEPSGQXitw=s900-c-k-c0x00ffffff-no-rj',
        link: 'www.youtube.com/@IvanaAlawi',
    },
    {
        id: 6,
        name: 'Malupiton',
        role: 'Ph Youtuber',
        img: 'https://yt3.googleusercontent.com/ZlyXCYeIrccrblVVb7zfAQvg8a3F9S5Pz2J7DIlAwufeEr7jUCK4htmQ3sb4l8Nh65I8OosJ=s900-c-k-c0x00ffffff-no-rj',
        link: 'www.youtube.com/@malupitonofficial8425',
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
        <p>No youtubers found.</p>
      )}
    </div>
    </>
  );
}

export default App;
