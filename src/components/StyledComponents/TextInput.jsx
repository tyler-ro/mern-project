import { TextField } from "@mui/material";

const SearchBox = styled(TextField)(() => ({
  "& input": {
    paddingLeft: "30px",
  },
  "& fieldset": {
    borderRadius: "30px",
  },
}));

