import React from 'react';
import { withRouter } from 'react-router-dom';

import Route from './route';

class CreateRoute extends React.Component {
  constructor(props) {
    super(props);

    const user_id = this.props.session.currentUser.id;
    this.state = { title: "", user_id, distance: 0, waypoints: [] };
    this.directions = null;

    this.getLocation = this.getLocation.bind(this);
    this.undoClick = this.undoClick.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const initialPosition = { lat: 37.7989111, lng: -122.4642558 };
    const zoom = 15;
    this.initializeMap(initialPosition, zoom);
    this.initializeSearchBox();
  }

  initializeSearchBox() {
    const input = document.getElementById('google-search-box');
    const searchBox = new google.maps.places.SearchBox(input);
    const map = this.map;
    searchBox.addListener('places_changed', function() {
      const places = searchBox.getPlaces();
      if (places.length === 0) return;

      const bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) return;

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(15);
        }
      });
    });
  }

  initializeMap(initialPosition, zoom) {
    const mapOptions = {
      center: initialPosition,
      zoom,
      draggableCursor: 'default'
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
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

  getLocation(e) {
    e.preventDefault();
    const map = this.map;
    const success = response => {
      const lat = response.coords.latitude;
      const lng = response.coords.longitude;
      map.setCenter({ lat, lng });
      map.setZoom(15);
    };
    const error = err => {

    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  undoClick(e) {
    const waypoints = this.state.waypoints;
    this.setState({ waypoints: waypoints.slice(0, waypoints.length-1)});
  }

  clearMarkers(e) {
    this.props.history.push("/login");
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

  renderErrors() {
    if (this.props.errors.length < 1) return;
    return (
      <p className='errors'>Error: { this.props.errors }</p>
    );
  }

  render () {
    return (
      <section id='map-container'>

        <section id='map'>
        </section>

        <section id='map-side-panel'>
          <form id='location-search'>
            <h4>Search Location</h4>
            <p>(address, or city, or zip, etc.)</p>
            <input id="google-search-box" type="text"></input>
          </form>

          <div className="or-divider">
            <span id="or-divider-text">or</span>
          </div>
          <button onClick={this.getLocation}>Get Your Location</button>

          <section id='distance'>
            <h2>Distance:</h2>
            <h2>{this.state.distance} mi</h2>
          </section>

          <section id="undo">
            <button onClick={this.clearMarkers}>Clear Route</button>
          </section>
        </section>

      </section>
    );
  }
}

export default withRouter(CreateRoute);

// <form id='save-route' onSubmit={this.handleSubmit}>
//   <h2>Save Route</h2>
//   <input type="text"
//          value={this.state.title}
//          placeholder="Title"
//          onChange={this.updateTitle}>
//   </input>
//
//   { this.renderErrors() }
//
//   <input type="submit" value="Save"></input>
//
// </form>

// testing

// this.state.user_id = this.props.session.currentUser.id;
// this.state.waypoints = JSON.stringify(this.state.waypoints);
// this.state.title = "Presidio 2";
