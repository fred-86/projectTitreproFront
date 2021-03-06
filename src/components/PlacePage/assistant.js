// Import npm
import { connect } from 'react-redux';

// Import local
import { loadPlaces, getMap } from 'src/store/actions/altHomeActions';
import PlacePage from './index';

const mapStateToProps = (state) => ({
  token: state.app.token,
  places: state.altHome.places,
  map: state.altHome.map,
});

const mapDispatchToProps = (dispatch) => ({
  loadPlaces: () => {
    dispatch(loadPlaces());
  },
  getMap: (place) => {
    dispatch(getMap(place));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);