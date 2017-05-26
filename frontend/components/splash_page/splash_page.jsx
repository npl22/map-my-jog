import React from 'react';

import HeroPanel from './hero_panel';
import FeaturePanel from './feature_panel';
import CitiesPanel from './cities_panel';
import Footer from '../shared/footer';

const SplashPage = (props) => {
  return (
    <section id="page_content" className="content">
      <HeroPanel guestLogin={props.guestLogin} session={props.session} />
      <FeaturePanel />
      <CitiesPanel />
      <Footer />
    </section>
  );
};

export default SplashPage;
