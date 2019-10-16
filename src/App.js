import React from "react";
import Navigation from "./core/Navigation";
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import configureStore from '../src/core/Redux/store';


export default () => {
  return (
  <Provider store={configureStore()}>
      <Navigation />
  </Provider>
  );
};
