// Import npm
import axios from 'axios';

// Import local
import { setCategories, setProducts } from 'src/store/actions';

const appMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOAD_CATEGORY':
      axios.get('http://julien-cambien.vpnuser.lan/apotheose/apo-E-pascommerce-back/public/api/product/category/browse')
        .then((response) => {
          store.dispatch(setCategories(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;
    case 'LOAD_PRODUCTS':
      axios.get('http://julien-cambien.vpnuser.lan/apotheose/apo-E-pascommerce-back/public/api/product/browse')
        .then((response) => {
          store.dispatch(setProducts(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default appMiddleware;
