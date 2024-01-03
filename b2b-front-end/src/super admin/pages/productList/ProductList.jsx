import AdminSidebar from '../../components/adminSidebar/AdminSidebar';
import ProductListComponent from '../../components/productList/ProductListComponent';
import './productList.css';

function ProductList() {
    return (
    <div className='productlist-main-container'>
        <AdminSidebar />
        <ProductListComponent />
    </div>
    );
  }
  
  export default ProductList;