import './App.css'
import Navbar from './Components/Navbar/Navbar'
import List from './Components/List/List'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <List />
     <Navbar />    
    </ThemeProvider>
    </>
  )
}

export default App
