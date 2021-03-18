import './site-viewport.scss';

type SiteViewportProperties = {
  className: string
}
function SiteViewport({className}: SiteViewportProperties) {
  return (
    <body className={className} />
  );
}

export default SiteViewport;
