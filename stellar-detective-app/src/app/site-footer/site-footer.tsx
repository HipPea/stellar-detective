import './site-footer.scss';

type SiteFooterProperties = {
  className: string
}
function SiteFooter({className}: SiteFooterProperties) {
  return (
    <footer className={className}>
    </footer>
  );
}

export default SiteFooter;
