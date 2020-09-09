import React from 'react';
import './App.css';

// React.createElement('div")
// https://api.github.com/search/repositories?q=html
function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  React.useEffect(()=>{
    if(!inputValue){
      return;
    } 
    setIsLoading(true);
    // 
   fetch('https://api.github.com/search/users?q='+inputValue)
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          setIsLoading(false);
          setUsers(data.items)
        
        });
  }, [inputValue]);
  
  console.log(users)
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
      <ul className="userslist">{users.map(user=>{
          return <li key={user.id} className="usersitem">
              <p>{user.login}</p>
              <a href={user.html_url} target="_blank">{user.html_url}</a>
            </li>
       })}</ul>
     </div>
  );
}

export default App;
