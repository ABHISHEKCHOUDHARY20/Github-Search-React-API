import React from 'react';
import './App.css';

// React.createElement('div")
// https://api.github.com/search/repositories?q=html
function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [repos, setRepos] = React.useState([]);
  return (
    <div >
      <form onSubmit={evt=>{
        evt.preventDefault();
        setInputValue(evt.target.elements.query.value);
        }}>
      <input className="github_search" type="text" name="query" placeholder="Search Github"/>
      </form>
     </div>
  );
}

export default App;
