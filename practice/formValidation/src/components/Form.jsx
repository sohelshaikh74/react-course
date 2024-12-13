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
  const [error, setError] = useState({});
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleFormValidation = () => {
    const newErrors = {};
    const {
      fullname,
      email,
      phoneNumber,
      password,
      confirmPassword,
      dob,
      gender,
      address,
      city,
    } = formData;
    if (!fullname) {
      newErrors.fullname = "full name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (emailRegex.test(email)) {
      newErrors.email = "please enter a valid email address";
    }
    const phoneRegex = /^\d+$/;
    if (!phoneNumber) {
      newErrors.phoneNumber = "phoneNumber is requied ";
    } else if (phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "phone number must be numeric";
    }
    if (!password) {
      newErrors.password = "Password is requied";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Confirm password do not match";
    }
    if (!dob) {
      newErrors.dob = "DOB is required";
    }
    if (!gender) {
      newErrors.gender = "Gender is required";
    }
    if (!address) {
      newErrors.address = "Address is requied";
    }
    if (!city) {
      newErrors.city = "Required filed";
    }
    return newErrors;
  };
  const hadndleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const formValidation = handleFormValidation();
    if (Object.keys(formValidation).length > 0) {
      setError(formValidation);
    }
    setFormData({
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
          {error.fullname && <p style={{ color: "red" }}>{error.fullname}</p>}
          <input
            type="emails"
            placeholder="enter email"
            onChange={handleFormData}
            name="email"
            value={formData.email}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          <input
            type="text"
            placeholder="phonenumber"
            onChange={handleFormData}
            name="phoneNumber"
            value={formData.phoneNumber}
          />
          {error.phoneNumber && (
            <p style={{ color: "red" }}>{error.phoneNumber}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            onChange={handleFormData}
            name="password"
            value={formData.password}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          <input
            type="password"
            placeholder="confirm Password"
            onChange={handleFormData}
            name="confirmPassword"
            value={formData.confirmPassword}
          />
          {error.confirmPassword && (
            <p style={{ color: "red" }}>{error.confirmPassword}</p>
          )}
        </div>
        <div>
          <label>DOB</label>
          <input
            type="date"
            onChange={handleFormData}
            name="dob"
            value={formData.dob}
          />
          {error.dob && <p style={{ color: "red" }}>{error.dob}</p>}
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
          {error.gender && <sapn style={{ color: "red" }}>{error.gender}</sapn>}
        </div>
        <div>
          <input
            type="text"
            placeholder="address"
            onChange={handleFormData}
            name="address"
            value={formData.address}
          />
          {error.address && <p style={{ color: "red" }}>{error.address}</p>}
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
            {error.city && <p style={{ color: "red" }}>{error.city}</p>}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
