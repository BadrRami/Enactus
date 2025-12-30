import React from 'react';
import { useDispatch } from 'react-redux';
import { trouverUsers } from './Features/Slice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handlSubmit(e){
        e.preventDefault();
        dispatch(trouverUsers({email, password}));
        navigate('/profile');

    }
    return (
        <div className="d-flex justify-content-center align-items-center mt-5" style={{height: "100vh;"}}>
        <form onSubmit={handlSubmit} className="border p-4 rounded" style={{width: "350px;"}}>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" placeholder="Enter email"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        </div>

    );
}

export default Login;
