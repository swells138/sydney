import React, { useState } from "react";
import { RoundedButton, Toast } from "react-sheikah-ui";
import cat from "/PersonalProject/CodeChallenge/src/blackcat.png";
import { Button, Popper, Box, Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function SydneyPage() {
  const [showToast, toggleToast] = useState(false);
  const [toastType] = useState("error");
  const [open, setOpen] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClose() {
    toggleToast(false);
  }

  function greenButtonClicked(event) {
    setOpen((previousOpen) => !previousOpen);
    setAnchorEl(event.currentTarget);
  }

  const handleCircle = () => {
    setOpenC(false);
  };
  const handleOpen = () => {
    setOpenC(true);
  };

  return (
    <React.Fragment>
      <div>
        <h1>The Buttons</h1>
        <div>
          <RoundedButton
            text="Summon Void"
            onClick={() => toggleToast(!showToast)}
          />
          <Toast
            type={toastType}
            text={"Raw Chicken Drumstick"}
            visible={showToast}
            imageSrc={cat}
            visibleDuration={3000}
            onClose={handleClose}
            imageAlt={"Drumstick"}
          />
        </div>
        <div className="mt-3 ">
          <Button
            onClick={greenButtonClicked}
            variant="contained"
            color="success"
          >
            Success
          </Button>
          <Popper open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
              You are a loser
            </Box>
          </Popper>
        </div>
        <div className="mt-3 ">
          <Button onClick={handleOpen}>Watch This</Button>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openC}
            onClick={handleCircle}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SydneyPage;
