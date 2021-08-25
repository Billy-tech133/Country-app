import "./App.css";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { useGlobalContext } from "./context";
import CountryList from "./components/CountryList";
import SingleCountry from "./components/SingleCountry";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const { theme, themes, setTheme } = useGlobalContext();
  return (
    <div className="app">
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <NavBar theme={theme} setTheme={setTheme} />
          <Switch>
            <Route exact path="/">
              <CountryList theme={theme} setTheme={setTheme} />
            </Route>
            <Route path="/country">
              <SingleCountry theme={theme} setTheme={setTheme} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
