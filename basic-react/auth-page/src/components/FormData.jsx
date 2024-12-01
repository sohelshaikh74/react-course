import { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "", // Ensuring gender has a default value
    city: "", // Ensuring city has a default value
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      fullname: "",
      email: "",
      password: "",
      gender: "", // Resetting gender to empty string to avoid undefined
      city: "", // Resetting city to empty string to avoid undefined
    });
  };

  return (
    <div className="bg-gray-400 w-full h-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="max-w-[1200px] bg-gray-200 p-5 rounded-lg shadow-lg "
      >
        <h1 className="font-medium text-2xl text-center mb-4 text-gray-800">
          Signup
        </h1>
        <div className="mb-3">
          <label className="block text-slate-800">Full Name</label>
          <input
            type="text"
            className="rounded-md w-full bg-slate-500 p-1 outline-none"
            name="fullname"
            value={formData.fullname}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="block text-slate-800">Email</label>
          <input
            type="email"
            className="rounded-md w-full bg-slate-500 p-1 outline-none"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="block text-slate-800">Password</label>
          <input
            type="password"
            className="rounded-md w-full bg-slate-500 p-1 outline-none"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>

        <div className="flex gap-3 text-black">
          <label className="text-slate-800">Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={changeHandler}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={changeHandler}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="others"
            checked={formData.gender === "others"}
            onChange={changeHandler}
          />
          Others
        </div>

        <div>
          <select
            name="city"
            className="text-black bg-white"
            onChange={changeHandler}
            value={formData.city} // Ensuring value is either a valid string or ""
          >
            <option value="">Select city</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Navi-Mumbai">Navi-mumbai</option>
            <option value="Lorem-Ipsum">Lorem ipsum dolor sit amet.</option>
          </select>
        </div>
        <button
          className="p-2 w-full bg-blue-500 rounded-lg mt-4"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default FormData;
