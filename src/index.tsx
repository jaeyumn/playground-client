import React from "react"
import ReactDOM from "react-dom/client"
import { SnackbarProvider } from "notistack"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      transitionDuration={{ enter: 200, exit: 200 }}
      autoHideDuration={1500}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
)
