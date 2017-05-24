class Route {
  constructor(map, setState) {
    this.map = map;
    this.setState = setState;

    this.directionsService = new google.maps.DirectionsService; // eslint-disable-line
    this.directionsRenderer = new google.maps.DirectionsRenderer; // eslint-disable-line
    this.directionsRenderer.setMap(this.map);

    this.renderDirections = this.renderDirections.bind(this);
  }

  getDirections(waypoints) {
    console.log("Start: ", waypoints[0].location);
    console.log("End: ", waypoints[waypoints.length - 1].location);

    // testing
    const waypts = [
      { location: { lat: 37.803072, lng: -122.460548 } },
      { location: { lat: 37.803564, lng: -122.466921 } },
      { location: { lat: 37.807938, lng: -122.471127 } },
      { location: { lat: 37.804255, lng: -122.454149 } }
    ];
    // testing

    const directionsRequest = {
      origin: waypoints[0],
      destination: waypoints[waypoints.length - 1],
      waypoints: waypoints,
      optimizeWaypoints: false,
      travelMode: "WALKING",
      unitSystem: google.maps.UnitSystem.IMPERIAL // eslint-disable-line
    };

    console.log("Directions Request: ", directionsRequest);

    this.directionsService.route(directionsRequest, (response, status) =>
      this.renderDirections(response, status));
  }

  renderDirections(response, status) {
    if (status === 'OK') {
      this.directionsRenderer.setDirections(response);
      const route = response.routes[0];
      this.setState({ distance: route.legs[0].distance.text });
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  }
}

export default Route;

// class Route {
//   constructor(map, setState) {
//     this.map = map;
//     this.setState = setState;
//
//     this.directionsService = new google.maps.DirectionsService; // eslint-disable-line
//     this.directionsRenderer = new google.maps.DirectionsRenderer; // eslint-disable-line
//   }
//
//   addWaypoint(position) {
//     const marker = new google.maps.Marker({
//       position,
//       map: this.map,
//       label: this.waypoints.length,
//       draggable: true
//     });
//
//     this.waypoints.push(marker.position);
//
//     if (this.waypoints.length > 1) {
//       this.getDirections(waypoints);
//     }
//   }
//
//   getDirections(waypoints) {
//     // logic for nesting position under location:
//
//     this.directionsService.route(
//       {
//         origin: this.waypoints[0],
//         destination: this.waypoints[this.waypoints.length - 1].position,
//         waypoints: this.waypoints,
//         optimizeWaypoints: false,
//         travelMode: "WALKING",
//         unitSystem: google.maps.UnitSystem.IMPERIAL // eslint-disable-line
//       }, (response) => {
//         this.renderDirections(response);
//       }
//     );
//   }
//
//   renderDirections(response) {
//     const route = response.routes[0];
//     this.setState({
//       distance: route.legs[0].distance.value,
//       polyline: route.overview_polyline,
//       start_address: route.legs[0].start_address,
//       end_address: route.legs[0].end_address
//     });
//
//     this.directionsRenderer.setDirections(response);
//   }
// }
//
// export default Route;
//
// // directionsDisplay.setMap(this.map);
// //
// // const waypoints = this.state.waypoints;
// // const routeData = {
// //   origin: waypoints[0].location,
// //   destination: waypoints[waypoints.length - 1].location,
// //   waypoints: waypoints,
// //   optimizeWaypoints: false,
// //   travelMode: 'WALKING'
// // };
// //
// // directionsService.route(routeData, function(response, status) {
// //   if (status === 'OK') {
// //     directionsDisplay.setDirections(response);
// //   } else {
// //     window.alert('Directions request failed due to ' + status);
// //   }
// // });
