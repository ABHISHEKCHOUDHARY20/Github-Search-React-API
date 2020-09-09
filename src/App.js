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
  return (
    <div >
      <form onSubmit={evt=>{
        evt.preventDefault();
        //debugger;
        setInputValue(evt.target.elements.query.value);
        }}>
      <input className="github_search" type="text" name="query" placeholder="Search Github"/>
      </form>
     </div>
  );
}

export default App;
