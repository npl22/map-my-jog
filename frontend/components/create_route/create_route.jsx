import React from 'react';

class CreateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", user_id: null, waypoints: "" };
    this.handleSubmit = this.handleSubmit.bind(this);

    // testing
    this.state.waypoints = [
      { location: { lat: 37.803072, lng: -122.460548 } },
      { location: { lat: 37.803564, lng: -122.466921 } },
      { location: { lat: 37.807938, lng: -122.471127 } },
      { location: { lat: 37.804255, lng: -122.454149 } }
    ];
  }

componentDidMount() {
  const mapOptions = {
    center: { lat: 37.8029111, lng: -122.4632558 },
    zoom: 15
  };
  this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const directionsService = new google.maps.DirectionsService;
  const directionsDisplay = new google.maps.DirectionsRenderer;

  directionsDisplay.setMap(this.map);

  const waypoints = this.state.waypoints;
  const routeData = {
    origin: waypoints[0].location,
    destination: waypoints[waypoints.length - 1].location,
    waypoints: waypoints,
    optimizeWaypoints: false,
    travelMode: 'WALKING'
  };

  directionsService.route(routeData, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

  handleSubmit(e) {
    this.state.user_id = this.props.session.currentUser.id;
    // testing
    this.state.waypoints = JSON.stringify(this.state.waypoints);
    this.state.title = "Presidio 2";
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
