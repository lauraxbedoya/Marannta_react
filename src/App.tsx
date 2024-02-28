import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import store from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';


const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppRouter />
        </Router>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
