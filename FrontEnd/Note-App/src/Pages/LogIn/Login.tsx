import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input"
import { Checkbox } from "../../components/ui/checkbox"
import { Button } from "../../components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import "../../styles/Auth.css"
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";



function Login() {

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  }
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <Card className="loginCard">
      <CardHeader className="loginHeader">
        <CardTitle>Log in</CardTitle>
        <CardDescription>Glad you are back!</CardDescription>
      </CardHeader>
      <CardContent className="cardContent">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Email"
            {
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email format"
              }
            })
            }
            type="email"
          />
          {errors.email && <CardDescription className="error">{`${errors.email.message}`}</CardDescription>}
          <br />
          <div className="password">
            <Input placeholder="Password"
              {
              ...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })
              }
              type={showPassword ? "text" : "password"}
            />
            <div className="eye" onClick={togglePassword}>
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </div>
          </div>
          {errors.password && <CardDescription className="error">{`${errors.password.message}`}</CardDescription>}
        </form>
        <br />
        <div className="remember">
          <Checkbox />
          <CardDescription>Remember me</CardDescription>
        </div>
        <br />
        <Button variant="outline" className="logInBtn"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >Log in</Button>
        <CardDescription className="forgot">Forgot password?</CardDescription>
        <br />
        <div className="or">
          <div className="hrContainer"><hr /></div>
          <CardDescription>Or</CardDescription>
          <div className="hrContainer"><hr /></div>
        </div>
        <div className="icons">
          <FcGoogle />
          <FaFacebook />
          <FaGithub />
        </div>
      </CardContent>
      <CardFooter className="cardFooter">
        <CardDescription>Don't have an account? <span className="switch"><Link to="/register">Sign up</Link></span></CardDescription>
      </CardFooter>
    </Card>

  )
}

export default Login
