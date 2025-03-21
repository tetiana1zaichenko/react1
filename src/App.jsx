import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HelloSection from "./components/HelloSection/HelloSection";
import Message from "./components/Message/Message";
import cats from "./assets/cats.json";
import Item from "./components/Item/Item";

const App = () => {
  const age = 22;
  const isAdult = age > 18;
  return (
    <>
      <Header />
      {isAdult && <h2>Привіт друже!</h2>}
      <Message text="Продам праску" isOnline={true} />
      <Message author="Olena" text="Куплю хот-дог" isOnline={false} />
      <Message author="Ihor" text="Привіт" isOnline />
      <ul>
        {cats.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ul>
    </>
  );
};

export default App;
