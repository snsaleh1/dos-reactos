import React from 'react';
import {Link} from 'react-router-dom';

function ProductCard({product, handleDeleteProduct}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{product.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Product Type: </dt>
          <dd>{product.type}</dd>
          <dt>Price: </dt>
          <dd>{product.price}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        {/* 
          The following is another approach to provide 
          data to a different route that's different
          from the Star Wars lab's solution code.
          The state object can be accessed in the new
          route via the location.state object
        */}
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {product}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteProduct(product._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ProductCard;