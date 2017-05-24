import React from 'react';

// import SidePanel from './side_panel';
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
    const user_id = this.props.session.currentUser.id;
    this.state = { title: "", user_id, distance: "", waypoints: [] };
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const initialPosition = { lat: 37.8029111, lng: -122.4632558 };
    const zoom = 15;
    this.initializeMap(initialPosition, zoom);
  }

  initializeMap(initialPosition, zoom) {
    const mapOptions = {
      center: initialPosition,
      zoom
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions); // eslint-disable-line
    const route = new Route(this.map, this.setState);

    this.map.addListener('click', e => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const waypoints = this.state.waypoints;
      this.setState({ waypoints: [...waypoints, { location: { lat, lng } }]});
      console.log(this.state);

      if (this.state.waypoints.length > 1) {
        route.getDirections(this.state.waypoints);
      }
    });
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    const route = { title: this.state.title,
                    waypoints: JSON.stringify(this.state.waypoints),
                    user_id: this.state.user_id };

    this.props.createRoute({ route });
  }

  render () {
    return (
      <section id='map-container'>

        <section id='map-side-panel'>
          <h1>Map Side Panel</h1>
          <h3>Distance</h3>
          <h3>{this.state.distance}</h3>
          <form onSubmit={this.handleSubmit}>

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
