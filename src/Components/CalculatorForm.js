import React, { useContext } from "react";
import SelectCategory from "../Components/SelectCategory";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../Css/index.css";
import { AdDataContext } from "../Context";
//Fields To get data in order to calculate ROI
export default function CalculaterForm() {
  const { monthlyBudget, setMonthelyBudget, leadValue, setLeadValue } =
    useContext(AdDataContext);

  const handleMonthlyBudgetChage = (e) => {
    setMonthelyBudget(e.target.value);
  };
  const handleLeadvalueChage = (e) => {
    setLeadValue(e.target.value);
  };

  return (
    <div className="headerDiv">
      <h1>
        <img
          src="./facebook.png"
          alt="logo"
          width="200px"
          height="45px"
          style={{ marginTop: 10 }}
        />{" "}
        Ad Calculator Tool
      </h1>
      <div style={{ paddingBottom: 15 }}>
        <p>1) Selcet Your Industry</p>

        {/* Component to select Facebook Ad Category  */}

        <SelectCategory />
      </div>
      <hr />
      {/* To Select Montely Ad Budget Slider Component */}
      <div>
        <p>
          2) Select Your Monthly Ad Budget <b>${monthlyBudget}</b>{" "}
        </p>
        <Box>
          <Slider
            defaultValue={200}
            aria-label="Default"
            onChange={handleMonthlyBudgetChage}
            min={200}
            max={20000}
            valueLabelDisplay="auto"
            sx={{
              "& .MuiSlider-thumb": {
                borderRadius: "1px",
              },
            }}
          />
        </Box>
      </div>
      <hr />
      <div>
        <p>
          3) Average Sale Price/Lead Value <b>${leadValue}</b>
        </p>
        <Box>
          <Slider
            defaultValue={10}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleLeadvalueChage}
            min={10}
            max={5000}
            sx={{
              "& .MuiSlider-thumb": {
                borderRadius: "1px",
              },
            }}
          />
        </Box>
      </div>
      <div>
        <p>
          What is the average value of a sale or what value would you place on a
          new lead?
        </p>
        <hr />
        <div style={{ marginTop: 33 }}>
          <p>
            4) Took Reference From:{" "}
            <a href="https://www.pixaura.com/facebook-ads-ppc-calculator/">
              Pixaura.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
