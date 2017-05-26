import React from 'react';
import { Link } from 'react-router-dom';

const RouteIndexItem = ({ route }) => (
  <ul className="route-index-item">
    <li><Link to={`/route/${route.id}`}>{route.title}</Link></li>
    <li>Distance: {route.distance}</li>
    <li>Start Location: ???</li>
  </ul>
);

export default RouteIndexItem;
