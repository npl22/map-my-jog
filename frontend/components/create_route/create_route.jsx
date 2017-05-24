import React from 'react';

import Route from './route';

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

class CreateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", user_id: null, waypoints: [] };

    this.addWaypoint = this.addWaypoint.bind(this);
    this.setState = this.setState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const initialPosition = { lat: 37.8029111, lng: -122.4632558 };
    const zoom = 15;
    this.createMap(initialPosition, zoom);
  }

  addWaypoint() {
    console.log("hello");
  }

  createMap(initialPosition, zoom) {
    const mapOptions = {
      center: initialPosition,
      zoom
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions); // eslint-disable-line

    // this.Route = new Route(this.map, this.props.setState);

    const addWaypoint = (lat, lng) => {
      const waypoints = this.state.waypoints;
      waypoints.push({ location: { lat, lng } });
      this.setState({ waypoints });
    };

    this.map.addListener('click', e => {
      console.log(e.latLng.lat());
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      addWaypoint(lat, lng);
      console.log(this.state);
    });



    //   this.addWaypoint(e.latLng);
    //   const lat = e.latLng.lat();
    //   const lng = e.latLng.lng();
    //   waypoints.push({ location: { lat, lng } });
      // this.Route.addWaypoint(e.latLng);
    // });
  }

  addWaypoint(e) {
    console.log(e);
  }

  handleSubmit(e) {
    const route = this.state;
    this.props.createRoute({ route });
  }

  render () {
    return (
      <section id='map-container'>
        <section id='map-side-panel'>
          <h1>Map Side Panel</h1>
          <button onClick={this.handleSubmit}>Save Route</button>
        </section>
        <section id='map'>
        </section>
      </section>
    );
  }
}

export default CreateRoute;
