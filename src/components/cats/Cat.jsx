import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import DiamondIcon from "@mui/icons-material/Diamond";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function Cat() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <div>
        <Typography component="legend">Rate the Stuff</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<DiamondIcon fontSize="inherit" />}
        />
      </div>
      <div>
        <Typography component="legend">10 stars</Typography>
        <Rating name="customized-10" defaultValue={2} max={5} />
      </div>
    </Box>
  );
}
