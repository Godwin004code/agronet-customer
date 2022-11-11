
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Marketplace from "./components/Marketplace/Marketplace";
import Messages from "./components/Messages/Messages";
import Request from "./components/Request/Request";
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import SingleProduct from './components/Marketplace/SingleProduct'
import OrderSummary from "./components/Payment/OrderSummary";
import PaymentDetails from "./components/Payment/PaymentDetails";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/get-started"  element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/dashboard" element={<Dashboard />} />
      <Route path="/user/marketplace" element={<Marketplace />} />
      <Route path="/user/marketplace/:slug" element={<SingleProduct />} />
      <Route path="/user/messages" element={<Messages />} />
      <Route path="/user/requests" element={<Request />} />
      <Route path="/user/notifications" element={<Notifications />} />
      <Route path="/user" element={<Profile />} />
      <Route path="/order/summary" element={<OrderSummary />} />
      <Route path="/order/payment/details/" element={<PaymentDetails />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
