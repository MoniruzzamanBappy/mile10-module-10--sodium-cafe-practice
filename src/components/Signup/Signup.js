import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import auth from "./../../firebase.init";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passRef = useRef("");
  const confirmPassRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSignupSubmit = (e)=>{
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPass = confirmPassRef.current.value;
    if(password === confirmPass){
      createUserWithEmailAndPassword(email, password);
      navigate('/home');
    }
    else{
      alert("Password doesn't match");
    }
  }
  return (
    <div className="login-form">
      <h1 className="text-center">Please Create an Account</h1>
      <Form onSubmit={handleSignupSubmit} className="w-25 log-container mx-auto">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control ref={confirmPassRef} type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group 
        onClick={() => setAgree(!agree)}
        className="mb-2" controlId="formBasicCheckbox">
          <Form.Check
            className={agree ? "text-primary" : "text-danger"}
            type="checkbox"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button disabled={!agree} className="w-100" variant="primary" type="submit">
          Sign Up
        </Button>
        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Signup;
