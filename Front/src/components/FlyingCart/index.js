// Import npm
import React from 'react';
import classNames from 'classnames';

const FlyingCart = ({ isOpened, setIsOpened }) => {
  const cartClass = classNames("FlyingCart", {"FlyingCart--open": isOpened});
  
  return (
    <aside className={cartClass}>
      <ul className="FlyingCart__product-list">
        <li>
          <article>
            <h2>product 1</h2>
            <div></div>
          </article>
        </li>
        <li>
          <article>
            <h2>product 2</h2>
            <div></div>
          </article>
        </li>
      </ul>
      <div className="FlyingCart__resume">
        <div className="FlyingCart__resume-logo">carte bancaire</div>
        <label htmlFor="FlyingCart__resume-dep">Département: </label>
        <select id="FlyingCart__resume-dep" className="FlyingCart__resume-dep">
          <option value="94">Val de Marne</option>
          <option value="86">Vienne</option>
          <option value="31">Occitanie</option>
        </select>
        <p className="FlyingCart__resume-total">Coût total : 450$</p>
        <button>Valider son panier</button>
      </div>
    </aside>
  );
};

export default FlyingCart;
