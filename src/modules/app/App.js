import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import Ex from '../ExcursionPage/ExcursionPage'

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Ex/>
    </ThemeProvider>

  );
}

export default App;
