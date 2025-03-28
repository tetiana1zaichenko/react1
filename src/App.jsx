import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import cats from "./assets/cats.json";
import Item from "./components/Item/Item";
import Modal from "./components/Modal/Modal";
import StyledSection from "./components/StyledSection/StyledSection";
import Button from "./components/Button/Button";
import fridge from "./assets/fridge.png";
import s from "./App.module.css";

const App = () => {
  return (
    <>
      <Header />
      <Button variant="outline">Click</Button>
      <Button variant="xl">Submit</Button>
      <h2 className="title">Style in React</h2>
      <Modal>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          natus deleniti placeat! Est facilis nulla nemo aspernatur quam vel
          sunt facere. Nam dolores animi esse quisquam inventore aliquid iusto
          pariatur!
        </p>
        <button>Click</button>
      </Modal>
      <Modal>
        <Message author="Alex" text="Продам праску" isOnline={true} />
      </Modal>
      <Modal>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Modal>
      <Message author="Olena" text="Куплю" isOnline={false} />
      <Message author="Ihor" text="Привіт" isOnline />
      <ul>
        {cats.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ul>
      <StyledSection />
      <img src={fridge} />
      <div className={s.flex}>
        <div className={s.box}></div>
        <div className={s.box}></div>
        <div className={s.boxRed}></div>
      </div>
    </>
  );
};

export default App;
