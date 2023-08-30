
import './App.css';
import './components/style.css';
import Home from './pages/home';
import LogIn from './pages/signIn';
import Header from './pages/header';
import SignUp from './pages/registrationForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

      <Router >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
        
      </Router>
    </>

  );
}


export default App;
