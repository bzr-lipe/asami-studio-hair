import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/Navbar';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}
