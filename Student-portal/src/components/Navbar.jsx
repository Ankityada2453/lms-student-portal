import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="navbar">
<h3>LMS Portal</h3>
<div>
<Link to="/dashboard">Dashboard</Link>
<Link to="/courses">Courses</Link>
<Link to="/assignments">Assignments</Link>
<Link to="/profile">Profile</Link>
</div>
</nav>
);
}