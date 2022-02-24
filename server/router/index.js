const authRouter = require('./auth');
const productRouter = require('./product');

function router(app) {
    app.use('/auth', authRouter);
    app.use('/product', productRouter);
}

module.exports = router;