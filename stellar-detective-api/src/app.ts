import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './controllers/common/common.routes.config';
import {HealthcheckRoutes} from './controllers/healthcheck/healthcheck.routes.config';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3001;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(bodyparser.json());

app.use(cors());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

// Add all routes
const healthcheckRoutes = new HealthcheckRoutes(app);
routes.push(healthcheckRoutes);

// Redirecting base route to the healthcheck
app.get('/', (req: express.Request, res: express.Response) => {
    res.redirect(HealthcheckRoutes.baseRoute)
});

server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}.`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}.`);
    });
});