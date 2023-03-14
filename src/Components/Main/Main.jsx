import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

function Main(countries) {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-5  dark:bg-darkBackground">
      <div className="xl:flex xl:justify-between xl:mx-16">
        <form action="submit" onChange={changeHandler}>
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full h-14 border rounded-lg pl-8 before:content-['🔎'] mb-8 xl:w-96 dark:bg-darkElements dark:border-darkElements"
          />
        </form>
        <Menu
          menuButton={
            <MenuButton className="w-52 h-14 border rounded-lg text-gray-400 bg-white mb-px dark:bg-darkElements dark:border-darkElements">
              Filter by Region
            </MenuButton>
          }
        >
          <div className="w-52 h-52 border rounded-lg text-gray-400 bg-white pl-8">
            <MenuItem className="py-2">Africa</MenuItem>
            <MenuItem className="py-2">America</MenuItem>
            <MenuItem className="py-2">Asia</MenuItem>
            <MenuItem className="py-2">Europe</MenuItem>
            <MenuItem className="py-2">Oceania</MenuItem>
          </div>
        </Menu>
      </div>
      <div className="xl:flex xl:flex-wrap xl:justify-center">
        {countries.countries
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((country, index) => {
            return (
              <Link to={country.name} key={index}>
                <div className="w-full my-5 pb-16 border border-grey-600 shadow-lg rounded-lg bg-white xl:w-60 xl:h-[350px] xl:m-6 dark:bg-darkElements dark:border-darkElements">
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
