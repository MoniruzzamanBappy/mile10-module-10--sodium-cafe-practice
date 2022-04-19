import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { BsGoogle } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1 || error2) {
    errorElement =  
      <div>
        <p className="text-danger">Error: {error?.message}{error1?.message}{error2?.message}</p>
      </div>
  }
  if(loading || loading1 || loading2){
    return <Loading></Loading>
  }
  if(user || user1 || user2){
    navigate('/home')
  }

  

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
        <p className="px-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-dark"></div>
      </div>
      {
        errorElement
      }
      <div>
      <button
      onClick={()=>signInWithGoogle()}
          type="button"
          className="btn d-flex justify-content-between align-items-center mt-0 my-2 btn-danger w-100 d-block mx-auto "
        >
          <span className="text-white ps-4">Google</span>
            <BsGoogle/>
        </button>
      <button
      onClick={()=>signInWithFacebook()}
          type="button"
          className="btn d-flex justify-content-between align-items-center my-2 btn-danger w-100 d-block mx-auto "
        >
          <span className="text-white ps-4">Facebook</span>
            <BsFacebook/>
        </button>
      <button
      onClick={()=>signInWithGithub()}
          type="button"
          className="btn d-flex justify-content-between align-items-center my-2 btn-danger w-100 d-block mx-auto "
        >
          <span className="text-white ps-4">Github</span>
          <BsGithub/>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
