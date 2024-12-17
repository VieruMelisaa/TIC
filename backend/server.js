const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes/routes');

const app = express();

app.use('/', routes);

morgan(app)
app.use(morgan('dev'))

app.listen(config.port, () => {
    console.log(`Serverul ruleaza pe portul: ${config.port}`);
});