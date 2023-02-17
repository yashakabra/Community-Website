import React, { useState } from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("All");

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <List>
      <ListItemButton
        sx={{
          "&.Mui-selected": {
            backgroundColor: "#0096FF",
            color: "#fff"
          }
        }}
        selected={activeItem === "All"}
        onClick={() => handleClick("All")}
      >
        <ListItemText primary="All" />
      </ListItemButton>
      <ListItemButton
        sx={{
          "&.Mui-selected": {
            backgroundColor: "#0096FF",
            color: "#fff"
          }
        }}
        selected={activeItem === "General"}
        onClick={() => handleClick("General")}
      >
        <ListItemText primary="General" />
      </ListItemButton>
      <ListItemButton
        sx={{
          "&.Mui-selected": {
            backgroundColor: "#0096FF",
            color: "#fff"
          }
        }}
        selected={activeItem === "Questions"}
        onClick={() => handleClick("Questions")}
      >
        <ListItemText primary="Questions" />
      </ListItemButton>
    </List>
  );
};

export default SideBar;

