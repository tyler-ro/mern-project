import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2f15d1",
    },
    secondary: {
      main: "#A378FF",
    },
  },
});


export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}
