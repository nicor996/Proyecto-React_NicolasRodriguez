
import {Link} from "react-router-dom"
import ItemCount from "../itemCount/ItemCount"
import "./Item.css"

const Item = ({element}) => {

  return (
    <div class="col-md-3 elementos">
      <div class="card h-100 cardBod">
          <img src={element.img} alt="" />
          <div class="card-body text-center">
            <h5 class="card-title">{element.name}</h5>
            <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
            <h3>${element.price}</h3>
            <ItemCount initial={1} stock={4}/>
          </div>
      </div>
    </div>
  );
};

export default Item;
