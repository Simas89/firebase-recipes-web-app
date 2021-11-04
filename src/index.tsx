import React from "react";
import ReactDOM from "react-dom";
import App from "core/App";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "state";
import "firebaseApp/config";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Provider>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
