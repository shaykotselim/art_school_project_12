import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import login from "../../assets/login.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        profileUpdate(loggedUser, name, photo);
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Create Your Account Successfully!',
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowPassword1((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="lg:flex items-center gap-8">
          <div>
            <img className="w-[700px] rounded-2xl" src={login} alt="" />
          </div>

          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-center font-bold text-primary text-4xl">
                Register Here!
              </h1>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Name Here"
                  {...register("name")}
                />

                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Email Here"
                  {...register("email", { required: true })}
                />

                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  type={showPassword ? "text" : "password"}
                  placeholder="Type Your Password Here"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).*$/,
                      message:
                        "Password must contain at least one capital letter and one special character",
                    },
                  })}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute mt-7 right-12 cursor-pointer"
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </span>
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}

                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Confirm-Password Here"
                  type={showPassword1 ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password") || "Passwords do not match",
                  })}
                />
                <span
                  className="absolute mt-7 right-12 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showPassword1 ? <FiEye /> : <FiEyeOff />}
                </span>
                {errors.confirmPassword && (
                  <span className="text-red-500">{errors.confirmPassword.message}</span>
                )}

                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type your Photo URL"
                  {...register("photo", { required: true })}
                />

                <select className="border-2 p-1 rounded-lg" {...register("gender")}>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>

                <input className="btn btn-primary w-full my-2" type="submit" />
              </form>

              <div className="text-center font-medium text-lg">
                <h1>
                  Already have an account?{" "}
                  <Link className="text-primary" to="/sign-in">
                    Sign-In
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
