export default function Book({product}) {  
    return <div className="product">
     <div className="product__actions">
            <input type="checkbox" name="" id="" className="delete-checkbox" />
        </div>
      
        <div className="product__details">
            <div className="product__id">{product.id}</div>
            <div className="product__description">{product.name}</div>
            <div className="product__price">$ {product.price}</div>
            <div className="product__info">Weight: {product.weight} Kg</div>
        </div>
    </div>;
}