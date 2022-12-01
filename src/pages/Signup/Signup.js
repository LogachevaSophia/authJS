import React, { useState } from "react";
import "./Signup.css";
import PropTypes from "prop-types";
import Input from "../../components/input/Input";
import Header from "../../Header/Header";
import { Controller, useForm } from "react-hook-form";

const Signup = ({ setToken }) => {
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
      name: "",
    },
  });

  async function componentDidMount(credentials) {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };
    return fetch("http://195.93.173.91:3002/signup", requestOptions).then(
      (data) => data.json()
    );
  }


  async function signup(data) {
    const { email, password, name} = data;
    if ((email!="")&& (password!="") &&(name!="")){
      const can = await componentDidMount({ email, password, name });
      if (can['can']=="1"){
        window.location.assign("../signin");

      }
    }

    
  }

  return (
    <div>
      <Header />
      <div className="conteiner">
        <div className="login-wrapper">
          <h1>Please Log up</h1>
          <form onSubmit={handleSubmit(signup)}>
            <div className="formContent">
            <div className="name_inp">
                <Controller
                  control={control}
                  name="name"
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
                      placeholder={"name"}
                    />
                  )}
                />
              </div>
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
                      name={name}
                      type="password"
                      placeholder={"password"}
                    />
                  )}
                />
              </div>
              
              <button className="buy_button">Зарегитрироваться</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Signup;
