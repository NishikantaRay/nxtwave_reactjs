import LoginForm from './components/loginForms/LoginForm';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resources from './pages/Resources';
function App() {
  return (
    <div >
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/resources" element={<Resources/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
