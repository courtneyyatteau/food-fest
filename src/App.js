import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';
import './App.css';
import store from './Components/store'


 
function App(){
    return (      
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <Main />
            </div> 
        </BrowserRouter>
      </Provider>
    );
}
export default App;