const express = require('express');
const app = express();
const port = 3008 || process.env.PORT;
const cors = require('cors')
const areasRouter = require('./routes/areas')
const stopsRouter = require('./routes/stops')
const busesRouter = require('./routes/buses')
const timelineRouter = require('./routes/timeline')
const nearestStopRouter = require('./routes/nearestStop')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/areas', areasRouter)
app.use('/stops', stopsRouter)
app.use('/buses', busesRouter)
app.use('/timeline', timelineRouter)
app.use('/nearestStop', nearestStopRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
