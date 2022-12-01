import React, { useState, useContext, useEffect } from "react";
import Header from "../../Header/Header";
import { AuthContext } from "../../context/auth-context";
import "./Main.css";
import Block from "../../components/Block/Block";
import axios from "axios";
/*Рабочий массив
  const arr = [
    {
      src: "https://www.youtube.com/embed/nhZyPQzx7JI",
      title: "YouTube video player",
    },
    {
      src: "https://www.youtube.com/embed/GaW13eDQO6s",
      title: "YouTube video player",
    },
    {
      src: "https://www.youtube.com/embed/nhZyPQzx7JI",
      title: "YouTube video player",
    },
  ];*/

const Main = () => {
  const [auth, setAuth] = useState(false);
  const [arr, setArr] = useState([]);
  const [fl, setFl] = useState(0);

  /*useEffect(() => {
    async function fetch() {
      /*const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: 1 }),
      };
      return fetch("http://195.93.173.91:3002/get_block", requestOptions)
        .then((data) => data.json())
        .then((data) => {
          setArr(data);
        });
    }
    fetch();
  }, []);*/
  /*function componentDidMount() {
    if (!fl){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: 1 }),
    };
    return fetch("http://195.93.173.91:3002/get_block", requestOptions)
      .then((data) => data.json())
      .then((data) => {
        setArr(data);
        setFl(1);
      });
    }
  }
  if (!fl){componentDidMount()};*/

  useEffect(() => {
    (async () => {
      const response = await axios.post("http://195.93.173.91:3002/get_block", {
        user_id: 1 ,
      });
      setArr(response.data);
    })();
  }, []);

  function Conteiner({arr}) {
    return (
      <div className="conteiner">
        {arr.map((item, index) => (
          <Block component={item} key={index} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <Header />
      <AuthContext.Provider value={{ auth, setAuth }}>
        <h1>Welcome to GeeksforGeeks</h1>
        <Conteiner arr={arr} />
      </AuthContext.Provider>
    </div>
  );
};

export default Main;
