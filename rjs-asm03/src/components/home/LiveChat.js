import { Fragment, useState } from "react";
import classes from "./LiveChat.module.css";

const LiveChat = () => {
  const [chatOpen, setChatOpen] = useState(false);

  // Hàm xử lý khi click vào chat
  const openChatHandler = () => {
    setChatOpen(chatOpen ? false : true);
  };

  return (
    <Fragment>
      <button onClick={openChatHandler} className={classes.btn_chat}>
        <i
          class="fa-brands fa-facebook-messenger"
          style={{ fontSize: "18px" }}
        ></i>
      </button>
      {chatOpen ? (
        <div className={classes.chat}>
          <div className={classes.top}>
            <p>Customer Support</p>
            <button> Let's Chat App</button>
          </div>
          <div className={classes.main}>
            <p className={classes.client}>Xin chào</p>
            <p className={classes.client}>Làm thế nào để xem các sản phẩm</p>
            <p className={classes.admin}>ADMIN: Chào bạn</p>
            <p className={classes.admin}>
              ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
            </p>
          </div>
          <div className={classes.bottom}>
            <input type="text" placeholder="Enter Message!"></input>
            <div>
              <i class="fa-solid fa-paperclip" style={{ color: "#999" }}></i>
              <i class="fa-solid fa-face-smile" style={{ color: "#999" }}></i>
              <i
                class="fa-solid fa-paper-plane"
                style={{ color: "#3399ff" }}
              ></i>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default LiveChat;
