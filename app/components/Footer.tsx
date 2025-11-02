import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  const disclaimer = [
    "All data and values were updated on 11/1/25",
    "Conversion rates are from Amex's website",
    "Airline points to USD conversion rates are based on google searches",
    "All values are fun estimates for quick comparisons. Do your own due diligence",
  ]
  
  
    return (
    <footer className="bg-amber-50 py-5">
      <div className="mx-auto max-w-6xl flex justify-around max-sm:flex-col-reverse max-sm:items-center">
        <div className="flex flex-col max-w-[50%] px-2 max-sm:max-w-[80%] max-sm:justify-center w-full">
            <h6 className="text-3xl max-sm:text-center max-sm:mt-5 text-black">About this project</h6>
            <p className="max-sm:text-center mt-2 text-sm text-black">I built this Amex Points tool because I was tired of doing the math every time I wanted to know what my points were worth. With so many transfer partners and conversion rates, it was hard to compare value at a glance. This project makes it easy to quickly see how far your points can go across different vendors without spreadsheets or extra effort.</p>
        </div>
        <div className="flex flex-col items-center max-sm:max-w-[80%] w-full">
            <h6 className="text-3xl mt-2 text-black">Disclaimer</h6>
            <ul>
                {
                    disclaimer.map((elem, index) => <li key={index} className="flex gap-2 items-center max-w[80%] text-sm px-2 mt-1 text-black"><FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4"/><span className="w-[85%]">{elem}</span></li> )
                }
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
