import React from 'react';
import './App.css';

// React.createElement('div")
// https://api.github.com/search/repositories?q=html
function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [repos, setRepos] = React.useState([]);

  React.useEffect(()=>{
    if(!inputValue){
      return;
    } 
    setIsLoading(true);
    // 
   fetch('https://api.github.com/search/repositories?q='+inputValue)
        .then(response => response.json())
        .then(data =>{
          console.log(data);
          setIsLoading(false);
          setRepos(data.items)
        
        });
  }, [inputValue]);

  console.log(repos);
  return (
    <div >
      <form onSubmit={evt=>{
        evt.preventDefault();
        //debugger;
        // console.log(evt.target.elements.query.value);
        setInputValue(evt.target.elements.query.value);
        }}>
      <input className="github_search" type="text" name="query" placeholder="Search Github"/>
      </form>
      {isLoading?<div>Loading...</div>:null}
      <ul className="repolist">{repos.map(repo=>{
          return <li key={repo.id} className="repoitem">
            <a href={repo.html_url} target="_blank">{repo.html_url}</a>
            <p>{repo.description}</p>
            </li>
       })}</ul>
     </div>
  );
}

export default App;
