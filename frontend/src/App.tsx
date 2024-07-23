import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company.d';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const[portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const[search,setSearch] = useState<string>("")
  const[SearchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onPortfolioCreate = (e: any) => { 
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if(exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onSearchSubmit = async (e:SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if(typeof result === "string"){
      setServerError(result);
    } else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }
    console.log();
  };

  const onPortfolioDelete = (e:any) =>{
    e.preventDefault();
    const removed = portfolioValues.filter((value) =>{
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>      
      <CardList searchResults={SearchResult} onPortfolioCreate={onPortfolioCreate}/> 
      {serverError && <div>Unable to connect</div>}

    </div>
  );
}
//zbab
export default App;
