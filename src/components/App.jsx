import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';
import Routes from './Routes.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Routes/>
        <Footer/>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
