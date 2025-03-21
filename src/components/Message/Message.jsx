const Message = ({ author = "Incognito", text, isOnline = fals }) => {
  return (
    <div>
      <h3>{author}</h3>
      {isOnline ? <h6>Online</h6> : <h6>Offline</h6>}
      <p>{text}</p>
    </div>
  );
};

export default Message;
