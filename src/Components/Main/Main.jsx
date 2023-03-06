import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

function Main(countries) {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-5">
      <div>
        <form action="submit" onChange={changeHandler}>
          <input type="text" placeholder="Search for a country..." />
        </form>
        <Menu menuButton={<MenuButton>Filter by Region</MenuButton>}>
          <MenuItem>Africa</MenuItem>
          <MenuItem>America</MenuItem>
          <MenuItem>Asia</MenuItem>
          <MenuItem>Europe</MenuItem>
          <MenuItem>Oceania</MenuItem>
        </Menu>
      </div>
      <div>
        {countries.countries
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((country, index) => {
            return (
              <Link to={country.name} key={index}>
                <div className="my-5 pb-16 border border-grey-600 shadow-lg rounded-lg bg-white w-3/4">
                  <img src={country.flag} alt={country.name} />
                  <div className="pl-5">
                    <h4 className="font-bold py-5">{country.name}</h4>
                    <h4 className='before:content-["Population:"] before:font-medium before:pr-1'>
                      {country.population}
                    </h4>
                    <h4 className='before:content-["Region:"] before:font-semibold before:pr-1'>
                      {country.region}
                    </h4>
                    <h4 className='before:content-["Capital:"] before:font-semibold before:pr-1'>
                      {country.capital}
                    </h4>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
