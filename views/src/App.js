import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style-formatted.css';
import './styles/wizard-1.css';
import './styles/skins/header/base/light.css';
import './styles/skins/header/menu/light.css';
import './styles/skins/brand/dark.css';
import './styles/skins/aside/dark.css';

// Components
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
