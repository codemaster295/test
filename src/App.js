import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Wallet from './pages/Wallet';
import Search from './pages/Search';
import FooterNavigation from './components/FooterNavigation';
function App() {
  return (
    <Router>
      <FooterNavigation>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      </FooterNavigation>
    </Router>
  );
}

export default App;
