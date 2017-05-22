import React from 'react';

class CreateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", user_id: null, waypoints: [] };

    // testing
    this.state.waypoints = [
      { lat: 37.803072, lng: -122.460548 },
      { lat: 37.803564, lng: -122.466921 },
      { lat: 37.807938, lng: -122.471127 },
      { lat: 37.804255, lng: -122.454149 }
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

    const path = new google.maps.Polyline({
      path: this.state.waypoints,
      geodesic: true,
      draggable: true,
      strokeColor: '#0000FF',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    path.setMap(this.map);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.state.user_id = this.props.currentUser.id
    // this.props.createRoute(this.state)
  }

  render () {
    return (
      <section id='map-container'>
        <section id='map-side-panel'>
          <h1>Map Side Panel</h1>
        </section>
        <section id='map'>
        </section>
      </section>
    );
  }
}

export default CreateRoute;
