import { useNavigate } from 'react-router-dom';


export default function Login() {
const navigate = useNavigate();


const handleLogin = (e) => {
e.preventDefault();
navigate('/dashboard');
};


return (
<div className="login-container">
<h2>Student Login</h2>
<form onSubmit={handleLogin}>
<input type="email" placeholder="Email" required />
<input type="password" placeholder="Password" required />
<button type="submit">Login</button>
</form>
</div>
);
}