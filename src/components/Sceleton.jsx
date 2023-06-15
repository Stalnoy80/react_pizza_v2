import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={300}
    height={465}
    viewBox="0 0 260 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="126" cy="123" r="120" />
    <rect x="1" y="270" rx="0" ry="0" width="260" height="28" />
    <rect x="3" y="326" rx="12" ry="12" width="256" height="74" />
    <rect x="0" y="428" rx="8" ry="8" width="72" height="33" />
    <rect x="126" y="422" rx="22" ry="22" width="129" height="38" />
  </ContentLoader>
);

export default Sceleton;
