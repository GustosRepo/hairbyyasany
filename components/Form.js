import { useState } from "react";

export default function Home() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };
  return (
    <>
      <h2 className="text-white">Questions? 🤔 Contact me ♡</h2>
      <div className="container rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-primary">
        <form onSubmit={handleSubmit} className="text-2xl font-bold dark:text-gray-50">
          <h3 className="text-white">Please fill out all information and I will get back to you ♡</h3>
          <div className=" text-gray-500 font-light mt-8 dark:text-gray-50">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className=" bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-pink-500 font-light text-gray-500"
            />
          </div>
          <div className=" text-gray-500 font-light mt-8 dark:text-gray-50">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email..."
              className=" bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-pink-500 font-light text-gray-500"
            />
          </div>
          <div className=" text-gray-500 font-light mt-8 dark:text-gray-50">
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className=" bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-pink-500 font-light text-gray-500"
            />
          </div>
          <button className="px-10 mt-8 py-2 bg-pink-300 text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-pink-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
        </form>
      </div>
    </>
  );
}