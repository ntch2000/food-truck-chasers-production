import React from 'react';
import "../../components/Search/Search.css"

const Search = () => {
    return (
        <div className="searchContainer">
           <form method="get" action="search">
    <div>
      <div><input style={{fontSize: "28PX", fontWeight: "bold",}} type="text" placeholder="     Food Trucks Near Me"></input></div>
      <div>
      <button type="button" class="btn btn-primary btn-lg"style={{ marginBottom: "10px", borderColor: "#FFFF", borderRadius: "15px", backgroundColor: "#FF914D", color: "ffff" }}>Chase Food Trucks</button>
      </div>
    </div>
  </form>
        </div>
    );
};

export default Search;