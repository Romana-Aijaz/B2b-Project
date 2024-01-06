import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./super admin/pages/dashboard/Dashboard";
import UserList from "./super admin/pages/userList/UserList";
import ProductList from "./super admin/pages/productList/ProductList";
import Subscription from "./super admin/pages/subscription/Subscription";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={ <Dashboard/> } />
          <Route path="/users" element={ <UserList /> } />
          <Route path="/products" element={ <ProductList/> } />
          <Route path="/subscriptions" element={ <Subscription/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
