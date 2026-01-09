import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';


export default function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/courses" element={<Courses />} />
<Route path="/assignments" element={<Assignments />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</BrowserRouter>
);
}