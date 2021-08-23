import "./App.css";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { useGlobalContext } from "./context";
import CountryList from "./components/CountryList";
import SingleCountry from "./components/SingleCountry";
import { BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  const { theme, themes, setTheme } = useGlobalContext();
  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={themes[theme]}>
          <NavBar theme={theme} setTheme={setTheme} />
          <Switch>
            <CountryList theme={theme} setTheme={setTheme} />
            <SingleCountry />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
