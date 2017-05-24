class Route {
  constructor(map, setState) {
    this.map = map;
    this.setState = setState;

    this.distance = 0;
    this.directionsService = new google.maps.DirectionsService; // eslint-disable-line
    this.directionsRenderer = new google.maps.DirectionsRenderer; // eslint-disable-line
    this.directionsRenderer.setMap(this.map);
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
  }

  renderDirections(response, status) {
    if (status === 'OK') {
      this.directionsRenderer.setDirections(response);

      const route = response.routes[0];
      this.calculateDistance(route);
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
    console.log("Distance (route.js):", this.distance);
    this.setState({ distance: this.distance });
  }
}

export default Route;
