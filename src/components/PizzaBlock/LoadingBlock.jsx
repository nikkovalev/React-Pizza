import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#e8e8e8"
      foregroundColor="#ecebeb"
    >
      <circle cx="137" cy="117" r="115" />
      <rect x="0" y="255" rx="6" ry="6" width="279" height="19" />
      <rect x="0" y="294" rx="6" ry="6" width="289" height="59" />
      <rect x="0" y="377" rx="6" ry="6" width="97" height="25" />
      <rect x="153" y="364" rx="17" ry="17" width="127" height="42" />
    </ContentLoader>
  );
};

export default LoadingBlock;
