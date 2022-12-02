import React, {useState} from 'react'
import {Form, Button, Card, FormLabel, FormControl, FormGroup} from 'react-bootstrap'
import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("../productlist");
        })
        .catch((error) => {
           setError(error);
        });
    } 
    // console.log({email, password})
    
  return (
    <div className='login'>
        <Card className='p-4 shadow-lg'>
            <Form onSubmit={handleLogin}>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <Button variant="primary" type="submit" className='btn btn-block'>Submit</Button>
            </Form>
           
            {error && <span className='text-danger mt-3'>Wrong Emailid and Password</span>}
        </Card>
    </div>
  )
}

export default Login