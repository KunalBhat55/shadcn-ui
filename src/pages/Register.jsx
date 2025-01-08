import { useState } from "react";

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

  const handleStart = () => {
    setStep(1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {step === 0 && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to the Course Enrollment
          </h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      )}
      {step === 1 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Question 1: What is your name?
          </h2>
          <input
            className="border p-2 mb-4"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setStep(2)}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Question 2: What is your email?
          </h2>
          <input
            className="border p-2 mb-4"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setStep(3)}
          >
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Thank you for registering!
          </h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setStep(4)}
          >
            View Data
          </button>
        </div>
      )}
      {step === 4 && (
        <div className="text-center">
          <h2 className="text-xl font-bold py-2">Data Entered</h2>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
