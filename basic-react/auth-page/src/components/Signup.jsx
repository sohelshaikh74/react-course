import { useState } from "react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    city: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({
      fullname: "",
      email: "",
      password: "",
      gender: "",
      city: "",
    });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {" "}
      {/* Centering the form */}
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-slate-950">
          Signup
        </h1>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="fullname"
            value={input.fullname}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            value={input.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            value={input.password}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-6 flex  gap-2">
          <label className="text-black">Male</label>
          <input
            type="radio"
            className="cursor-pointer"
            name="gender"
            value="male"
            checked={input.gender === "male"}
            onChange={changeHandler}
          />
          <label className="text-black">Female</label>
          <input
            type="radio"
            className="cursor-pointer"
            name="gender"
            value="female"
            checked={input.gender === "female"}
            onChange={changeHandler}
          />
          <select name="city" value={input.city} onChange={changeHandler}>
            <option value=""> select city</option>
            <option value="navi-mumbai">Navi-mumbai</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
