import { BrowserRouter, Route, Routes } from "react-router-dom";

import Chat from "./Chat/Chat";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Users from "./Users/Users";
import Login from "./Login/Login";
import NewProduct from "./New/NewProduct";
import EditProduct from "./New/EditProduct";
import DetailHistory from "./History/Component/DetailHistory";
import MainHistory from "./History/Component/MainHistory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/users" element={<Users />} />
          <Route path="/product/:id" element={<EditProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/history" element={<MainHistory />} />
          <Route path="/history/:id" element={<DetailHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
