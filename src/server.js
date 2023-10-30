import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    guitars: Model
  },

  seeds(server) {
    server.create("guitar", {
      id: 1,
      brand: "MIRAGEGUITAR",
      title: "MIRAGE GUITAR Standard '50s",
      category: "Les Paul",
      year: "2023",
      price: 9999,
      img: "gibson50s.jpeg",
      desc:
        "This is from Mirage JS - The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, vintage deluxe tuners with keystone buttons, and aged gold tophat knobs. The calibrated Burstbucker 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with AlNiCo II magnets, audio taper potentiometers and orange drop capacitors.",
      on: false
    });
  },

  routes() {
    this.namespace = "/api";
    this.logging = false;
    this.timing = 1000;

    this.get("/guitars", (schema, request) => {
      return {
        guitars: [
          {
            id: 1,
            brand: "MIRAGEGUITAR",
            title: "MIRAGE GUITAR Standard '50s",
            category: "Les Paul",
            year: "2023",
            price: 9999,
            img: "gibson50s.jpeg",
            desc:
              "This is from Mirage JS - The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, vintage deluxe tuners with keystone buttons, and aged gold tophat knobs. The calibrated Burstbucker 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with AlNiCo II magnets, audio taper potentiometers and orange drop capacitors.",
            on: false
          }
        ]
      };
    });
  }
});
