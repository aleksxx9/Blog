import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Login from './Components/Login';
import Register from './Components/Register';
import showResults from './Components/FormValidation/showResults';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Copyright from './Components/Copyright';

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      {/* <NavigationBar /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/"><div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-around', flexDirection: 'column', height: '80vh'
          }}><Register onSubmit={showResults} /></div></Route>
        </Switch>
      </BrowserRouter>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div >
  );
}

export default App;
