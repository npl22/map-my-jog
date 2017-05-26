import React from 'react';

import HeroPanel from './hero_panel';
import FeaturePanel from './feature_panel';
import CitiesPanel from './cities_panel';
import Footer from '../shared/footer';

const SplashPage = () => (
  <section id="page_content" className="content">
    <HeroPanel />
    <FeaturePanel />
    <CitiesPanel />
    <Footer />
  </section>
);

export default SplashPage;
