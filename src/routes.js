import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ContactPage from 'pages/Contact';
import Navbar from './components/Navbar';
import SignUpPage from 'pages/SignUp';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contato' element={<ContactPage />}/>
        <Route path='/cadastro' element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
