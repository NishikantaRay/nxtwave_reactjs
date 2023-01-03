import LoginForm from './components/loginForms/LoginForm';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resources from './pages/Resources';
import CreateItem from './pages/CreateItem';
function App() {
  return (
    <div >
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/nxtwave_reactjs" element={<LoginForm />} />
          <Route path="resources" element={<Resources/>} />
          <Route path="/create" element={<CreateItem/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
