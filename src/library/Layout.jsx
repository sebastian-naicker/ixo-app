import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './Layout.scss';

function App({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo">Company Name</p>
        <nav className="App-navigation">
          <ul className="App-navigation__list">
            <li className="App-navigation__list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="App-navigation__list-item">
              <Link to="/about">About</Link>
            </li>
            <li className="App-navigation__list-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
}

export default App;
