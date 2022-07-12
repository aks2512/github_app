import { useState } from 'react';
import './App.css';
import { AppContent } from './components/app-content';

function App() {
  const [userinfo, setUserinfo] = useState();
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleSearch = (e) => {
    const key = e.key;
    const value = e.target.value;

    if ( key === 'Enter' ) {
      setIsFetching(true);
      const user = fetch(`https://api.github.com/users/${value}`)
        .then( (response) => response.json());
        
      user.then(function(data) {

        setUserinfo({
          username: data.name,
          photo: data.avatar_url,
          login: data.login,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following
        })

        setRepos([]);
        setStarred([]);

        
      }).finally(function() {
        setIsFetching(false);
      });

    }
  }

  const getRepos = () => {
    const repos = fetch(`https://api.github.com/users/${userinfo.login}/repos`)
      .then( (response) => response.json());

    repos.then( function(data) {
      setRepos(data);
      setStarred([]);
    })

  }

  const getStarred = () => {
    const starred = fetch(`https://api.github.com/users/${userinfo.login}/starred`)
      .then( (response) => response.json());

    starred.then( function(data) {
      setStarred(data);
      setRepos([]);
    })

  }

  return (
    <AppContent
      userinfo={userinfo}
      repos={repos}
      starred={starred}
      handleSearch={(e) => handleSearch(e)}
      getRepos={getRepos}
      getStarred={getStarred}
      isFetching={isFetching}
    />
  );
}

export default App;
