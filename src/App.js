import "./App.css";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { useGlobalContext } from "./context";
function App() {
  const { theme, themes, setTheme } = useGlobalContext();
  return (
    <div className="app">
      <ThemeProvider theme={themes[theme]}>
        <NavBar theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
