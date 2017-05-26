import React from 'react';

import RouteIndexItem from './route_index_item';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const { routes } = this.props;
    console.log("hello");
    window.props = this.props;
    return (
      <section className="route-index">
        <h1>My Routes</h1>
        {routes.map((route,i) =>
          <RouteIndexItem key={`route-${i}`} route={route}/>)}
      </section>
    );
  }
}

export default Homepage;
