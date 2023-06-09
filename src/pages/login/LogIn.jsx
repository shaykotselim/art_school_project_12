import React, {  useContext } from "react";
import login from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";
const LogIn = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const {email, password} = data;
    signIn(email, password)
    .then(res=>{
        const loggedUser = res.user;
        console.log(loggedUser);
        Swal.fire({
            icon: 'success',
            title: 'Go Ahead',
            text: 'Login Successfully!'
          })
    })
    .catch(error=>{
        console.log(error.message);
    })
    reset();
  };
  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(res=>{
      console.log(res.user);
      Swal.fire({
        icon: 'success',
        title: 'Congratulations',
        text: 'Google Login Successfully!',
       
      })
    })
    .catch(error=>{
      console.log(error.message);
    })

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="lg:flex gap-8">
          <div>
            <img className="w-[700px] rounded-2xl" src={login} alt="" />
          </div>

          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-center font-bold text-primary text-5xl my-8">
                Login Here!
              </h1>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Email Here"
                  {...register("email")}
                />

                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Password Here"
                  {...register("password")}
                />

                {/* {errors.password && <p>This field is required</p>} */}

                <input className="btn btn-primary w-full my-2" type="submit" />
              </form>

                <div className="text-center font-medium text-lg">
                    <h1>Don't have an account? <Link className="text-primary" to="/sign-up">Sign-Up</Link> </h1>
                </div>
                <div className="text-center">
                  <button onClick={handleGoogleSignIn} className="flex justify-center items-center bg-primary text-white text-xl font-medium p-2 w-full rounded-lg"><span><FcGoogle/></span><span>Sing In With Google</span></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
 