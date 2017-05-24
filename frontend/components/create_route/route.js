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
