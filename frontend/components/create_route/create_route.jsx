import React from 'react';

// import SidePanel from './side_panel';
import Route from './route';

class CreateRoute extends React.Component {
  constructor(props) {
    super(props);

    const user_id = this.props.session.currentUser.id;
    this.state = { title: "", user_id, distance: 0, waypoints: [] };
    this.firstMarker = null;
    this.directions = null;

    this.searchLocation = this.searchLocation.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const initialPosition = { lat: 37.8029111, lng: -122.4632558 };
    const zoom = 15;
    this.initializeMap(initialPosition, zoom);

    const input = document.getElementById('google-search-box');
    new google.maps.places.SearchBox(input); // eslint-disable-line
  }

  initializeMap(initialPosition, zoom) {
    const mapOptions = {
      center: initialPosition,
      zoom
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions); // eslint-disable-line
    this.route = new Route(this.map, this.setState.bind(this));

    this.addClickListener();
  }

  addClickListener() {
    this.map.addListener('click', e => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const waypoints = this.state.waypoints;
      this.setState({ waypoints: [...waypoints, { location: { lat, lng } }]});

      this.directions = this.route.getDirections(this.state.waypoints);
      // clear old directions
      if (this.directions) { this.directions.setMap(null); }
    });
  }

  searchLocation(e) {
    e.preventDefault();
  }

  getLocation() {

  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    const route = { title: this.state.title,
                    waypoints: JSON.stringify(this.state.waypoints),
                    distance: this.state.distance,
                    user_id: this.state.user_id };
    this.props.createRoute({ route });
  }

  render () {
    return (
      <section id='map-container'>

        <section id='map-side-panel'>
          <form onSubmit={this.searchLocation} id='location-search'>
            <h4>Search Location</h4>
            <p>(address, or city, or zip, etc.)</p>
            <input id="google-search-box" type="text"></input>
            <input type='submit' value='Search'></input>
            <button onClick={this.getLocation}>Get Your Location</button>
          </form>

          <section id='distance'>
            <h2>Distance:</h2>
            <h2>{this.state.distance} mi</h2>
          </section>

          <form onSubmit={this.handleSubmit}>
            <h2>Save Route</h2>
            <label>Title:
              <input type="text"
                     value={this.state.title}
                     onChange={this.updateTitle}>
              </input>
            </label>

            <input type="submit" value="Save Route"></input>
          </form>
        </section>

        <section id='map'>
        </section>

      </section>
    );
  }
}

export default CreateRoute;

// testing
// this.state.waypoints = [
//   { location: { lat: 37.803072, lng: -122.460548 } },
//   { location: { lat: 37.803564, lng: -122.466921 } },
//   { location: { lat: 37.807938, lng: -122.471127 } },
//   { location: { lat: 37.804255, lng: -122.454149 } }
// ];
// this.state.user_id = this.props.session.currentUser.id;
// this.state.waypoints = JSON.stringify(this.state.waypoints);
// this.state.title = "Presidio 2";
