import clsx from "clsx";
import s from "./Message.module.css";
import { FaUserLarge } from "react-icons/fa6";
const Message = ({ author = "Incognito", text, isOnline = fals }) => {
  return (
    <div>
      <h3 className={s.title}>
        <FaUserLarge className={s.icon} />
        {author}
      </h3>
      {isOnline ? (
        <h6 className={clsx(s.status, s.green)}>Online</h6>
      ) : (
        <h6 className={clsx(s.status, s.red)}>Offline</h6>
      )}
      <p className={clsx(text.length > 10 && s.alert)}>{text}</p>
    </div>
  );
};

export default Message;
