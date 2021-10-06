import React from "react";
import SelectCategory from "../Components/SelectCategory";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
export default function CalculaterForm() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
      }}
    >
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
      
      <SelectCategory />
      </div>
      <hr />
      <div >
        <p>2) Select Your Monthly Ad Budget </p>
        <Box>
          <Slider
            defaultValue={50}
            aria-label="Default"
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
        <p>3) Average Sale Price/Lead Value</p>
        <Box>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
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
        <div>
            <p>4) Free <a href="/service/social-media-marketing/">Facebook PPC Ad</a> Strategy Session</p>
           
        </div>
      </div>
    </div>
  );
}
