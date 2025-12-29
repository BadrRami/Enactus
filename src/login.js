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
        <div class="d-flex justify-content-center align-items-center mt-5" style={{height: "100vh;"}}>
        <form onSubmit={handlSubmit} class="border p-4 rounded" style={{width: "350px;"}}>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" placeholder="Enter email"/>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
        </div>

    );
}

export default Login;
