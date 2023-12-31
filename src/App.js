
import './App.css';
import './components/style.css';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import LogIn from './pages/signIn';
import Header from './pages/header';
import SignUp from './pages/registrationForm';
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

      <HashRouter >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signin" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
        
      </HashRouter>
    </>

  );
}


export default App;
