import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import FilterBarWrapper from '../components/FilterBarWrapper';
import SortBar from '../containers/SortBar';
import TicketsList from '../containers/TicketsList';
import LoadingBar from '../components/LoadingBar';

import classes from './App.module.sass';
import logo from '../img/Logo.svg';

function App() {
  return (
    <Provider store={store}>
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <img src={logo} alt="aviasales logo" />
          </div>
        </div>
        <LoadingBar />
        <div className={classes.container}>
          <div className={classes.content}>
            <FilterBarWrapper />
            <div>
              <SortBar />
              <TicketsList />
            </div>
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
