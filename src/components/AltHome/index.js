// Import npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

// Import local
import AltCategoryNavBar from '../AltCategoryNavBar';
import PlaceCard from '../PlaceCard';
import bannerImg from '../../assets/images/practical/forest.jpg';

const AltHome = ({
  token,
  loadPlaceCategories,
  placeCategories,
  loadPlaces,
  places,
  setStatusCode
}) => {
  const { id } = useParams();
  const placesByCategory = parseInt(id) === 0 ? places : places.filter((place) => (place.placeCategory.id === parseInt(id)));

  useEffect(() => {
    window.scrollTo(0, 0);
    setStatusCode('');
  }, []);

  useEffect(() => {
    if (token !== '') {
      loadPlaceCategories();
      loadPlaces();
    }
  }, [token]);

  return (
    <React.Fragment>
      <section className="AltHome">
        <div className="AltHome__banner">
          <img className="AltHome__banner-img" src={bannerImg} alt="forest" />
          <article className="AltHome__banner-article">
            <h1 className="AltHome__banner-article-title"> Bienvenue sur<br />E-Pas-Commerce</h1>
            <p className="AltHome__banner-article-text">
              Supris(e) ? C’est normal.<br />
            </p>
            <p className="AltHome__banner-article-text">
              En arrivant ici, vous découvrez le but véritable de notre plate-forme.<br />
              Nous n’avons pas vocation à vous empêcher de consommer.
            </p>
            <p className="AltHome__banner-article-text">
              Avec E-PaKo (contraction d’E-Pas-Commerce),  nous vous proposons un ensemble de solutions pour changer certaines habitudes de consommation héritées de notre quotidien ultra connecté.
            </p>
            <p className="AltHome__banner-article-text">
              N’achetez pas tout de suite !<br />
              Découvrez plutôt de nouvelles alternatives proches de chez vous ET n’hésitez pas à nous faire part de vos trouvailles ou bon plans.
            </p>
            <p className="AltHome__banner-article-text">
              Bonne visite ou à très bientôt !
            </p>
          </article>
        </div>
        <AltCategoryNavBar placeCategories={placeCategories} />
        <div className="AltHome__place-list">
          {placesByCategory.map((place) => (
            <PlaceCard data={place} key={place.id} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default AltHome
