const express = require('express');

const mainRouter = express.Router();

mainRouter.use(require('./auth'));
mainRouter.use(require('./preview'));
mainRouter.use(require('./webhook'));
mainRouter.use(require('./main'));

const apiRouter = express.Router();
apiRouter.use(require('./build-log'));
apiRouter.use(require('./build'));
apiRouter.use(require('./published-branch'));
apiRouter.use(require('./user'));
apiRouter.use(require('./published-file'));
apiRouter.use(require('./site'));

// prefix all api routes with "/v0"
mainRouter.use('/v0', apiRouter);

// this must come last since it contains a wildcard
// catch-all route to serve content pages
mainRouter.use(require('./content'));

module.exports = mainRouter;
