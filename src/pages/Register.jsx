import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

function Register() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const 
  handleNext = async () => {
    const isValid = await trigger();
    console.log(isValid);
    if (isValid) {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <div className="bg-white p-10 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center">Welcome</h2>
            <p className="text-gray-500 text-center">
              Let&apos;s get started by creating an account
            </p>
            <Button onClick={handleNext}>Get Started</Button>
          </div>
        )}

        {step === 1 && (
          <div className="bg-white p-10 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center">
              Create Account
            </h2>
            <p className="text-gray-500 text-center">
              Please fill in the form below
            </p>
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full p-3 border rounded-md ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("name", { required: "Full name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full p-3 border rounded-md ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full p-3 border rounded-md ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="bg-white p-10 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center">Verify Email</h2>
            <p className="text-gray-500 text-center">
              Please enter the code sent to your email
            </p>
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div>
                <input
                  type="text"
                  placeholder="Verification Code"
                  className={`w-full p-3 border rounded-md ${
                    errors.code ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("code", {
                    required: "Verification code is required",
                  })}
                />
                {errors.code && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.code.message}
                  </p>
                )}
              </div>
              <Button onClick={handleNext}>Verify</Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="bg-white p-10 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center">Success</h2>
            <p className="text-gray-500 text-center">
              You have successfully registered
            </p>
            <Button type="submit">Get Started</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;
