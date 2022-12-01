import React, { useState } from "react";
import "./Signin.css";
import PropTypes from "prop-types";
import Input from "../../components/input/Input";
import Header from "../../Header/Header";
import { Controller, useForm } from "react-hook-form";

const Sign = ({ setToken }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /*async function loginUser(credentials) {
    return fetch("http://195.93.173.91:3002/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      
    }).then((data) => data.json());
  }*/
  async function componentDidMount(credentials) {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };
    return fetch("http://195.93.173.91:3002/signin", requestOptions).then(
      (data) => data.json()
    );
  }
  /*const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    localStorage.setItem("token", token["token"]);
    console.log(localStorage.getItem("token"));
    window.location.assign("../");
  };*/

  async function signin(data) {
    const { email, password } = data;
    if ((email!="")&& (password!="")){
      const token = await componentDidMount({ email, password });
    if (token["token"] != "-1") {
      localStorage.setItem("token", token["token"]);
      window.location.assign("../");
    }
    }

    
  }

  return (
    <div>
      <Header />
      <div className="conteiner">
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit(signin)}>
            <div className="formContent">
              <div className="email_inp">
                <Controller
                  control={control}
                  name="email"
                  rules={{}}
                  render={({
                    field: { name, value, onChange },
                    fieldState: { error },
                  }) => (
                    <Input
                      value={value}
                      error={error}
                      onChange={onChange}
                      label="Password"
                      name={name}
                      type="text"
                      placeholder={"email"}
                    />
                  )}
                />
              </div>
              <div className="pass_inp">
                <Controller
                  control={control}
                  name="password"
                  rules={{}}
                  render={({
                    field: { name, value, onChange },
                    fieldState: { error },
                  }) => (
                    <Input
                      value={value}
                      error={error}
                      onChange={onChange}
                      label="Password"
                      name={name}
                      type="password"
                      placeholder={"password"}
                    />
                  )}
                />
              </div>
              <button className="buy_button">Получить статью</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Sign.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Sign;
