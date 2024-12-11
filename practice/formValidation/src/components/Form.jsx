import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  });
  //   const handleFormData = (e) => {
  //     const { name, value } = e.target.value;
  //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  //   };
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const hadndleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={hadndleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="enter full name"
            onChange={handleFormData}
            name="fullname"
            value={formData.fullname}
          />
          <input
            type="emails"
            placeholder="enter email"
            onChange={handleFormData}
            name="email"
            value={formData.email}
          />
          <input
            type="text"
            placeholder="phonenumber"
            onChange={handleFormData}
            name="phoneNumber"
            value={formData.phoneNumber}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            onChange={handleFormData}
            name="password"
            value={formData.password}
          />
          <input
            type="password"
            placeholder="confirm Password"
            onChange={handleFormData}
            name="confirmPassword"
            value={formData.confirmPassword}
          />
        </div>
        <div>
          <label>DOB</label>
          <input
            type="date"
            onChange={handleFormData}
            name="dob"
            value={formData.dob}
          />
        </div>
        <div>
          <label>Gender</label>
          {["male", "female", "others"].map((genderOption) => (
            <label key={genderOption}>
              <input
                type="radio"
                onChange={handleFormData}
                name="gender"
                value={genderOption}
                checked={formData.gender === genderOption}
              />
              {genderOption}
            </label>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="address"
            onChange={handleFormData}
            name="address"
            value={formData.address}
          />
          <select
            id=""
            onChange={handleFormData}
            name="city"
            value={formData.city}
          >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Navi-Mumbai">Navi Mumbai</option>
            <option value="Thane">Thane</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
