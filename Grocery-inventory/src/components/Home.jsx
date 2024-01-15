import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue);
    setInputValue("");
  };

  return (
    <Box>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter Product"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default Home;
