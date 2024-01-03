import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./super admin/pages/dashboard/Dashboard";
import UserList from "./super admin/pages/userList/UserList";
import ProductList from "./super admin/pages/productList/ProductList";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={ <Dashboard/> } />
          <Route path="/users" element={ <UserList /> } />
          <Route path="/products" element={ <ProductList/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
