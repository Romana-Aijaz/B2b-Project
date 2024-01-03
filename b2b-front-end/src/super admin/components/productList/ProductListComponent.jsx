import './productListComponent.css';

function ProductListComponent() {
    return (
    <div className='productList-body-container'>
        <div className='productlist-heading'>Product List</div>
        <div className='productlist-body-inner-container'>
            <div className='category-btn-container'>
                <div className='icon-btn'>icon</div>
                <div className='category-btn-text'>Create Categories</div>
            </div>
            <div className='productlist-heading-container'>
            <div className='productlist-heading-value'>Agriculture</div>
            <div className='productlist-heading-value'>Cars</div>
            <div className='productlist-heading-value'>Dairy Fruits</div>
            <div className='productlist-heading-value'>Dairy Products</div>
            <div className='productlist-heading-value'>Appetizer</div>
            <div className='productlist-heading-value'>Dessert</div>
        </div>
        <div className='product-divider'></div>
        <div className='category-box-container'>
            <div className='add-category-box'>
                <div className='add-icon'>+</div>
                <div className='add-category-text'>Add New Sub Category</div>
            </div>
            <div className='category-box'>
                <div className='category-upper-box'>
                    <div className='menu-text'>(Menu Name)</div>
                </div>
                <div className='category-lower-box'>
                    <div className='edit-btn'>Edit</div>
                </div>
            </div>
            <div className='category-box'> <div className='category-upper-box'>
                    <div className='menu-text'>(Menu Name)</div>
                </div>
                <div className='category-lower-box'>
                    <div className='edit-btn'>Edit</div>
                </div></div>
            <div className='category-box'> <div className='category-upper-box'>
                    <div className='menu-text'>(Menu Name)</div>
                </div>
                <div className='category-lower-box'>
                    <div className='edit-btn'>Edit</div>
                </div></div>
            <div className='category-box'> <div className='category-upper-box'>
                    <div className='menu-text'>(Menu Name)</div>
                </div>
                <div className='category-lower-box'>
                    <div className='edit-btn'>Edit</div>
                </div></div>
            <div className='category-box'> <div className='category-upper-box'>
                    <div className='menu-text'>(Menu Name)</div>
                </div>
                <div className='category-lower-box'>
                    <div className='edit-btn'>Edit</div>
                </div></div>
            <div className='category-box'> <div className='category-upper-box'>
                    <div className='menu-text'>(Menu Name)</div>
                </div>
                <div className='category-lower-box'>
                    <div className='edit-btn'>Edit</div>
                </div></div>
            <div className='category-box'> <div className='category-upper-box'>
                    <div className='menu-text'>(Menu Name)</div>
                </div>
                <div className='category-lower-box'>
                    <div className='edit-btn'>Edit</div>
                </div></div>
        </div>
        </div>
      
    </div>
    );
  }
  
  export default ProductListComponent;