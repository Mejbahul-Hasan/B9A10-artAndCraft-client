import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";

const RegisterPage = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);

        // reset error/success
        setRegisterError('');
        setRegisterSuccess('');

        if (password.length < 6) {
            setRegisterError(toast.error('Password must by at least 6 character'));
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError(toast.error('Password must have an Uppercase letter'));
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError(toast.error('Password must have an Lowercase letter'));
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log(result.user);
                        setRegisterSuccess(toast.success("Registration Successful !"));
                        e.target.reset();
                        // window.location.reload();
                    })
            })
            .catch(error => {
                console.error(error);
                setRegisterError(toast.error('Already Registered !'))
            })
    }

    return (
        <div className="hero bg-base-200 rounded-2xl">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input input-bordered w-full" required />
                                <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already Member? Please <Link to="/login"><button className="btn btn-link">Log in</button></Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;