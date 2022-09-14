import { createTheme } from "@mui/material/styles"
import { Colors } from "../utils/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    common: {
      tan: Colors.tan,
      lightRed: Colors.lightRed,
      red: Colors.red,
      offBlack: Colors.offBlack,
      gray: Colors.gray,
    } as Partial<typeof Colors>,
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: Colors.primary,
    },
    h2: {
      fontSize: "3rem",
      fontFamily: "Montserrat",
      fontWeight: 500,
      color: Colors.white,
    },
    h3: {
      fontSize: "2rem",
      fontFamily: "Montserrat",
      fontWeight: 300,
      color: Colors.primary,
    },
    h4: {
      fontSize: "3rem",
      fontFamily: "Philosopher",
      fontWeight: 700,
      color: Colors.white,
    },
    h5: {
      fontSize: "2rem",
      fontFamily: "Philosopher",
      fontWeight: 700,
      color: Colors.white,
      fontStyle: "italic",
    },
    body1: {
      fontSize: "1.5rem",
      fontFamily: "Montserrat",
      color: Colors.gray,
    },
  },
})

export default theme
