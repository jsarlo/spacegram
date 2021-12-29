import './App.css';
import Header from './Components/Header';
import Feed from './Components/Feed';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './Components/Theme/UseDarkMode';
import { darkTheme, lightTheme } from './Components/Theme/Themes';
import { GlobalStyles } from './Components/Theme/GlobalStyles';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header themeToggler={themeToggler}/>
        <Feed />
      </>
    </ThemeProvider>
  );
}

export default App;
