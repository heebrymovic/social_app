import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Home, Profile, Login, Register } from './pages';
import AppLayout from './ui/AppLayout';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<h2>Invalid Route</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
