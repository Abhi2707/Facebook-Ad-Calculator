import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import {AdDataContext} from '../Context'

export default function SelectCategory() {

  const {categoryValue, setCategoryValue} =useContext(AdDataContext)
  const [categories, setCategories] = useState([]);

  const handleChange = (event) => {
    setCategoryValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://facebook-backend-ads.herokuapp.com/api/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={categoryValue}
          onChange={handleChange}
          size="small"
          style={{ width: "50%" }}
          placeholder="Select Category"
        >
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <MenuItem key={category.id} value={category}>
                  {category.label}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
}
