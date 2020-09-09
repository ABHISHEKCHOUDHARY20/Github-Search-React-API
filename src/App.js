import React from 'react';
import './App.css';
function App() {
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
