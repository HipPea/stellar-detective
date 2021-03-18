import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class HealthcheckRoutes extends CommonRoutesConfig {
    static readonly baseRoute = '/healthcheck';

    constructor(app: express.Application) {
        super(app, 'HealthcheckRoutes');
    }

    configureRoutes() {
        this.app.route(HealthcheckRoutes.baseRoute)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /healthcheck
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            }).get((req: express.Request, res: express.Response) => {
                // TODO Check connectivity status's
                res.status(200).send(`Server is up and serving content!`);
            })

        return this.app;
    }
}
