import './product.css';
import Price from './Price';

function Product({ title, idx }) {
    let oldprice=["123","657","78","90"]
    let newprice=["780","675","85433","7525"]
    let description=["i am jin","i am v ","i am jm","i am jk"]
  return (
    <div className="product-box">
     <p>Title:{title}</p>
     <p>Description :{description[idx]}</p>
     <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
    </div>
  );
}

export default Product;
