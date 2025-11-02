"use client";

import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import Row from "./ui/Row";

const Main = () => {
  const [search, setSearch] = useState<number>(1000);
  const [searchInput, setSearchInput] = useState<string>("1,000")
  const data = [
    { name: "Amazon", pv: 7 },
    { name: "Best Buy", pv: 7 },
    { name: "Dell.com", pv: 7 },
    { name: "Grubhub", pv: 7 },
    { name: "JustGiving", pv: 7 },
    { name: "NYC Taxi", pv: 10 },
    { name: "PayPal", pv: 7 },
    { name: "Saks Fifth Avenue", pv: 7 },
    { name: "Seamless.com", pv: 7 },
    { name: "Airbnb", pv: 7 },
    { name: "Best Western Hotels & Resorts", pv: 8.5 },
    { name: "Delta", pv: 7 },
    { name: "Fairmont Hotels & Resorts", pv: 10 },
    { name: "Four Seasons Hotels and Resorts", pv: 7 },
    { name: "Hilton", pv: 7 },
    { name: "Hotels.com", pv: 7 },
    { name: "Mandarin Oriental", pv: 8.5 },
    { name: "Marriott", pv: 7 },
    { name: "The Ritz-Carlton", pv: 7 },
    { name: "American Express (Baby)", pv: 5 },
    { name: "American Express (Birthday Candles)", pv: 5 },
    { name: "American Express (Blue Balloons)", pv: 5 },
    { name: "American Express (Classic Gold)", pv: 5 },
    { name: "American Express (Gold Sparkle)", pv: 5 },
    { name: "American Express (Home Improvement)", pv: 5 },
    { name: "American Express (Pet)", pv: 5 },
    { name: "American Express (Resy)", pv: 5 },
    { name: "American Express (Rose Gold)", pv: 5 },
    { name: "American Express (Shop Small)", pv: 5 },
    { name: "American Express (Thank You Teal)", pv: 5 },
    { name: "American Express (Wedding)", pv: 5 },
    { name: "American Express (White Metal)", pv: 5 },
    { name: "American Express Blue Facet Snowflake", pv: 5 },
    { name: "American Express Holiday Cheer", pv: 5 },
    { name: "American Express Season's Greetings", pv: 5 },
    { name: "American Express Spread Joy", pv: 5 },
    { name: "American Express Watercolor Snow", pv: 5 },
    { name: "Uber", pv: 7 },
    { name: "Bahama Breeze", pv: 10 },
    { name: "Benihana", pv: 10 },
    { name: "Bloomin Brands Multi-Brand", pv: 8.5 },
    { name: "Bonefish Grill", pv: 8.5 },
    { name: "Carrabba's Italian Grill", pv: 8.5 },
    { name: "Cheddar's Scratch Kitchen", pv: 10 },
    { name: "Darden Restaurants", pv: 10 },
    { name: "Del Frisco's", pv: 10 },
    { name: "Eddie V's", pv: 10 },
    { name: "Fleming's Prime Steakhouse & Wine Bar", pv: 8.5 },
    { name: "Home Chef", pv: 8.5 },
    { name: "Lettuce Entertain You Enterprises", pv: 10 },
    { name: "Longhorn Steakhouse", pv: 10 },
    { name: "Morton's The Steakhouse", pv: 10 },
    { name: "Olive Garden", pv: 10 },
    { name: "Outback Steakhouse", pv: 8.5 },
    { name: "Panera Bread", pv: 8.5 },
    { name: "Ruth's Chris Steak House", pv: 10 },
    { name: "Seasons 52", pv: 10 },
    { name: "Starbucks Card", pv: 7 },
    { name: "The Capital Grille", pv: 10 },
    { name: "The Cheesecake Factory", pv: 8.5 },
    { name: "Yard House", pv: 10 },
    { name: "Apple Gift Card", pv: 8.5 },
    { name: "Regal Cinemas", pv: 8.5 },
    { name: "Soothe", pv: 10 },
    { name: "adidas", pv: 10 },
    { name: "Albertsons Companies", pv: 7 },
    { name: "Athleta", pv: 10 },
    { name: "Banana Republic", pv: 10 },
    { name: "Bath & Body Works", pv: 10 },
    { name: "Bergdorf Goodman", pv: 10 },
    { name: "Best Buy", pv: 7 },
    { name: "CB2", pv: 10 },
    { name: "Coach", pv: 10 },
    { name: "Crate and Barrel", pv: 10 },
    { name: "Crate and Kids", pv: 10 },
    { name: "Fanatics", pv: 10 },
    { name: "Gap", pv: 10 },
    { name: "Gap Options Brand", pv: 10 },
    { name: "Instacart", pv: 7 },
    { name: "lululemon", pv: 8.5 },
    { name: "Macy's", pv: 8.5 },
    { name: "Neiman Marcus", pv: 10 },
    { name: "Nike", pv: 8.5 },
    { name: "Nordstrom", pv: 8.5 },
    { name: "Nordstrom Rack", pv: 8.5 },
    { name: "Old Navy", pv: 10 },
    { name: "PetSmart", pv: 8.5 },
    { name: "Pottery Barn Kids", pv: 10 },
    { name: "Pottery Barn Teen", pv: 10 },
    { name: "Pottery Barn", pv: 10 },
    { name: "RH", pv: 10 },
    { name: "Saks Fifth Avenue", pv: 10 },
    { name: "Saks OFF 5TH", pv: 10 },
    { name: "Sam's Club", pv: 7 },
    { name: "Sam's Club Gift of Membership - Club Level", pv: 7 },
    { name: "Sam's Club Gift of Membership - Plus Level", pv: 7 },
    { name: "Sephora", pv: 8.5 },
    { name: "T.J.Maxx Multi-Brand", pv: 8.5 },
    { name: "Target", pv: 7 },
    { name: "The Home Depot", pv: 10 },
    { name: "Total Wine & More", pv: 8.5 },
    { name: "Under Armour", pv: 8.5 },
    { name: "Walmart", pv: 7 },
    { name: "Wayfair", pv: 8.5 },
    { name: "West Elm", pv: 10 },
    { name: "Williams Sonoma", pv: 10 },
    { name: "Aer Lingus AerClub", pv: 12 },
    { name: "Aeromexico Rewards", pv: 6 },
    { name: "Air Canada Aeroplan", pv: 10 },
    { name: "Air France-KLM Flying Blue", pv: 9 },
    { name: "ANA Mileage Club", pv: 11 },
    { name: "Avianca LifeMiles", pv: 10 },
    { name: "Cathay Pacific Asia Miles", pv: 11 },
    { name: "Delta SkyMiles®", pv: 10 },
    { name: "Emirates Skywards®", pv: 8 },
    { name: "Etihad Guest", pv: 11 },
    { name: "Iberia Plus", pv: 12 },
    { name: "JetBlue TrueBlue®", pv: 9 },
    { name: "Qantas Frequent Flyer", pv: 9 },
    { name: "Qatar Airways Privilege Club", pv: 12 },
    { name: "Singapore Airlines KrisFlyer", pv: 11 },
    { name: "The British Airways Club", pv: 12 },
    { name: "Virgin Atlantic Flying Club", pv: 13 },
  ];

  const modifiedData = data.map((elem) => ({
    ...elem,
    value: search * (elem.pv / 1000),
  }));

  useEffect(() => {
    if (searchInput) {
        setSearch(parseInt(searchInput.replaceAll(",", "")))
    }
  }, [searchInput])

  return (
    <main>
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-5 py-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-3xl font-bold">Points visualizer</h2>
          <div className="flex gap-2">
            <label htmlFor="points">Enter your points here</label>
            <input
              type="text"
              id="points"
              name="points"
              className="border rounded-lg px-1 outline-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={searchInput}
              onChange={(event) => parseInt(event.target.value) > 0 ? setSearchInput(event.target.value) : setSearchInput("")}
              onBlur={() => setSearchInput((prev) => parseInt(prev.replace(",","")).toLocaleString("en-US"))}
            />
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-center max-w-[80%]">
          <Chart data={modifiedData} />
        </div>
        <h2 className="text-2xl text-center font-bold">
          Points value per company
        </h2>
        <div className="flex flex-col w-full max-w-[80%] px-1 mt-1 border rounded-lg">
          <div className="titles flex justify-between">
            <h3 className="font-bold w-[50%] text-left border-r">Name</h3>
            <h3 className="font-bold w-[50%] text-center">Value ($USD)</h3>
          </div>
          <div className="rows w-full h-fit">
            {modifiedData
              .sort((a, b) => b.value - a.value)
              .map((elem, index) => (
                <Row
                  key={index}
                  name={elem.name}
                  value={Math.floor(elem.value)}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
