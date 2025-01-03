import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { createUser } = useContext(AuthContext);
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
            })
    };

    console.log(watch("name")); // Logs the value of the "name" input field on change

    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col md:flex-row mx-auto">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="card bg-base-100 md:w-1/2 w-full max-w-sm shadow-2xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="Name"
                                        className="input input-bordered"
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", { required: "Email is required" })}
                                        placeholder="Email"
                                        className="input input-bordered"
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters long",
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Password must be less then 20 characters",
                                            },
                                            pattern: {
                                                value: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                                message:
                                                    "Password must have at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character",
                                            },
                                        })}
                                        placeholder="Password"
                                        className="input input-bordered"
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="text-center items-center mb-4">
                                <small>Already Registered? </small>
                                <Link to="/login">
                                    <b className="text-yellow-600 hover:underline">Go to Log In</b>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
