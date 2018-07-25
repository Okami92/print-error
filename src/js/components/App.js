import React, { Component } from 'react';
require('es6-promise').polyfill();
import ReactToPrint from 'react-to-print';
import PrintablePage from './PrintablePage';

class App extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>print</button>}
          content={() => this.componentRef}
        />
        <PrintablePage
          ref={el => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default App;
