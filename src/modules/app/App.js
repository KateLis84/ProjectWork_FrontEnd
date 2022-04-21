import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import MainTheme from '../themes/mainThemes'
import TeamPage from '../TeamPage/TeamPage'

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
   
      <TeamPage/>

    </ThemeProvider>

  );
}

export default App;
