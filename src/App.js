import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Layout from "./library/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
