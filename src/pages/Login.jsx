import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Import navigate


export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://complete-backend-1.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful');

        // ✅ Store token and user in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // ✅ Redirect to home after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Server error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-2 w-full"
        />
        <div className='flex flex-1/2 justify-between'>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
        <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password</Link>
        </div>

         <p className="mt-4">
            you don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">Regiter</Link>
        </p>
      </form>

   
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
