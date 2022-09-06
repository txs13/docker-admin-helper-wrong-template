import express from "express";
import path from 'path';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static((path.join(__dirname, 'public'))))
app.use("/scripts", express.static((path.join(__dirname, '../node_modules/jquery/dist'))))
app.get('/', function(req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(app.get("port"), () => {
  console.log(`app is listening on port ${app.get("port")}`)
})