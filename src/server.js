import { createServer, Model } from "miragejs";
import Menu_data from './components/Menu_data'

createServer({
  models: {
    guitars: Model,
    price: Model
  },

  seeds(server) {
    Menu_data.forEach(guitar => {
      server.create('guitar', guitar)
    })
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    //this.urlPrefix = "https://77r97z-3000.csb.app/";

    this.get("/guitars", (schema, request) => {
      return schema.guitars.all();
    });

    this.get("/guitars/id", (schema, request) => {
      const id = request.params.id
      return schema.guitars.find(id)
    })

    this.post("/guitars", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.db.guitars.insert(attrs);
    });

    this.post('/guitars', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      let guitarsData = require('./components/Menu_data').default

      //Add new guitar to existing data
      guitarsData.push(attrs)

      //write the updated data back to Menu_Data.js
      const fs = require('fs')
      const path = './components/Menu_data.js'
      const content = `export default ${JSON.stringify(guitarsData, null, 2)};\n`

      fs.writeFileSync(path, content)

      return schema.create('guitars', attrs)
    })

    this.post('/prices', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      return schema.create('price', attrs)
    })

    this.get("/prices", (schema, request) => {
      return schema.all('price')
    })
  }
});
