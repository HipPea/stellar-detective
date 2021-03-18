import './site-viewport.scss';
import { BaseRoute, DashboardRoute, TransactionInsightRoute, WalletInsightRoute } from '../routing/routes';
import { Switch, Route, Redirect} from 'react-router-dom';

type SiteViewportProperties = {
  className: string
}
function SiteViewport({className}: SiteViewportProperties) {
  return (
    <body className={className} >
        <Switch>
            <Route path={DashboardRoute}>
                DashboardRoute
            </Route>
            <Route path={TransactionInsightRoute}>
                TransactionInsightRoute
            </Route>
            <Route path={WalletInsightRoute}>
                WalletInsightRoute
            </Route>
            <Route path={BaseRoute}>
                <Redirect to={{pathname: DashboardRoute}} />
            </Route>
        </Switch>
    </body>
  );
}

export default SiteViewport;
