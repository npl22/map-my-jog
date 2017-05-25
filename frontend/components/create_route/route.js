class Route {
  constructor(map, setState) {
    this.map = map;
    this.setState = setState;

    this.distance = 0;
    this.directionsService = new google.maps.DirectionsService; // eslint-disable-line
    this.directionsRenderer = null;
  }

  getDirections(waypoints) {
    const directionsRequest = {
      origin: waypoints[0],
      destination: waypoints[waypoints.length-1],
      waypoints: waypoints.slice(1, waypoints.length-1),
      optimizeWaypoints: false,
      travelMode: "WALKING",
    };

    this.directionsService.route(directionsRequest, (response, status) =>
      this.renderDirections(response, status));

    return this.directionsRenderer; // send directions to parent class
  }

  renderDirections(response, status) {
    if (status === 'OK') {
      const renderOptions = {
        map: this.map,
        directions: response,
        suppressMarkers: true,
        preserveViewport: true
      };
      this.directionsRenderer = new google.maps.DirectionsRenderer(renderOptions); // eslint-disable-line

      const route = response.routes[0];
      this.calculateDistance(route);
      this.addMarkers(route);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  }

  calculateDistance(route) {
    let distance = 0; let distanceInMeters;
    for (let i = 0; i < route.legs.length; i++) {
      distanceInMeters = route.legs[i].distance.value;
      distance += (distanceInMeters * (1/1000) * (1/1.60934));
    }
    this.distance = parseFloat(distance.toFixed(2));
    this.setState({ distance: this.distance });
  }

  addMarkers(route) {
    // render markers
    for (let i = 1; i < route.legs.length; i++) {
      const marker = new google.maps.Marker({ // eslint-disable-line
        map: this.map,
        label: { // eslint-disable-line
          text: `${i}`,
          fontWeight: "700"
        },
        position: route.legs[i].start_location
      });
    }

    // make last one animate
    const marker = new google.maps.Marker({ // eslint-disable-line
      map: this.map,
      position: route.legs[route.legs.length-1].end_location,
      animation: google.maps.Animation.DROP //eslint-disable-line
    });
  }
}

export default Route;
