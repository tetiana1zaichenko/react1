import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HelloSection from "./components/HelloSection/HelloSection";
import Message from "./components/Message/Message";

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
    </>
  );
};

export default App;
