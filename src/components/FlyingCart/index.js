// Import npm
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';

// Import local
import { calculateAmount } from 'src/Utils';
import Item from './Item/assistant';

// Component
const FlyingCart = ({
  isOpened,
  token,
  loadLocations,
  locations,
  selectedLocation,
  setSelectedLocation,
  items,
  amount,
  setAmount,
  removeFromCart,
  sendCart,
  haveFound,
  statusCode,
  showPopUp
}) => {
  const cartClass = classNames("FlyingCart", { "FlyingCart--open": isOpened });

  const checkCart = () => {
    if (amount !== 0 && selectedLocation !== '') {
      sendCart();
    }
    else {
      const messages = [];

      if (amount === 0) {
        messages.push('Votre panier est vide !');
      }
      if (selectedLocation === '') {
        messages.push('Veuillez sélectionner un département.');
      }
      showPopUp(messages);
    }
  };

  useEffect(() => {
    if (token !== '') {
      loadLocations();
    }
  }, [token]);

  useEffect(() => {
    const newAmount = calculateAmount(items);
    setAmount(newAmount);
  }, [items]);

  return (
    <aside className={cartClass}>
      <h1>Mon panier</h1>
      <ul className="FlyingCart__product-list">
        {items.map((item) => (
          <li key={`item-${item.product.name}`}>
            <Item item={item} removeFromCart={removeFromCart} />
          </li>
        ))}
      </ul>
      <div className="FlyingCart__resume">
        <div className="FlyingCart__resume-logo">
          14 jours pour changer d’avis(3)<br />
          Paiement en 4 fois possible<br />
          Paiement sécurisé<br />
        </div>
        <label htmlFor="FlyingCart__resume-dep">Département  </label>
        <select id="FlyingCart__resume-dep" className="FlyingCart__resume-dep" value={selectedLocation} onChange={setSelectedLocation}>
          <option value=""> </option>
          {locations.map((location) => (
            <option value={location.postalcode} key={location.name}>{location.name}</option>
          ))}
        </select>
        <p className="FlyingCart__resume-total">
          Coût total : <span className="FlyingCart__resume-total-amount">{amount}&#8364;</span>
        </p>
        <button type="button" onClick={checkCart}>Valider</button>
      </div>
      {haveFound && <Redirect to='/cart' />}
      {!haveFound && statusCode === '404' && <Redirect to='/practical/category/0' />}
    </aside>
  );
};

export default FlyingCart;
