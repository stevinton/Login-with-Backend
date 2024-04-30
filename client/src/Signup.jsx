import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25 ">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div class="form-group row m-2 ">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext border rounded" id="staticName" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row m-2">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext border rounded " id="staticEmail" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div class="form-group row m-2 ">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Pass</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0 ">
                        Register
                    </button>
                </form>
                <p>Already have an account</p>
                <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none ">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Signup;