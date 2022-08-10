import logo from './logo.svg';
import './App.css';
import {Listing,Filtration} from "nasrallah-listing"
import { useState } from 'react';

function App() {
  
  const [items , setItems] = useState([{"title":"title11","breif":"description1"},{"title":"title2","breif":"description2"},{"title":"title3","breif":"description3"}])
  const [filteredItems , setFilteredItems] = useState(items)
  const handleChange = (filterationTitle)=>{
    let filteredData = items.filter((item)=>{
      return item.title.includes(filterationTitle);
    })
    setFilteredItems(filteredData)
  }

  return (
    <div className="App">
      <Filtration handleChange={handleChange}></Filtration>
      <Listing items={filteredItems}></Listing>
    </div>
  );
}

export default App;
