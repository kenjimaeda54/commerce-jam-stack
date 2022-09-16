import * as React from "react"
import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme"
import Layout from "../components/Layout"

export default ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>{element}</Layout>
    </ThemeProvider>
  )
}
