import { createServer, Model } from "miragejs";

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
    server.create("guitar", {
      id: 2,
      brand: "Gibson",
      title: "Standard '60s",
      category: "Les Paul",
      year: "1960",
      price: 2779,
      img: "gibson60sicedtea.jpeg",
      desc:
        "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60s has a solid mahogany body with an AA figured maple top, and a SlimTaper™ 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with a classic-style Tune-O-Matic™ bridge, aluminum Stop Bar tailpiece, Grover® Rotomatic® \"Kidney\" tuners, and gold Top Hat knobs with silver reflectors. The 60s Burstbucker™ pickups are loaded with Alnico 5 magnets, audio taper potentiometers, and Orange Drop® capacitors.",
      on: false
    });
    server.create("guitar", {
      id: 3,
      brand: "Fender",
      title: "American Vintage II",
      category: "Stratocaster",
      year: "1961",
      price: 2029,
      img: "fenderstrat1961.jpeg",
      desc:
        "The Fender® American Vintage II series presents a remarkably accurate take on the revolutionary designs that altered the course of musical history. Built with period-accurate bodies, necks and hardware, premium finishes and meticulously voiced, year-specific pickups, each instrument captures the essence of authentic Fender craftsmanship and tone.",
      on: false
    });
    server.create("guitar", {
      id: 4,
      brand: "Fender",
      title: "Player Plus",
      category: "Stratocaster",
      year: "2020",
      price: 909,
      img: "fenderstrat1961.jpeg",
      desc:
        "At the heart of this Strat® is a trio of Player Plus Noiseless™ pickups – bright and touch sensitive, they offer classic Strat tone without hum. A push-pull pot on the tone control adds the neck pickup to switch positions 1 and 2 for two sounds not usually found on a Strat®. The silky satin Modern “C” Player Plus Strat® neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12” radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. Smooth and responsive, the 2-point tremolo provides classic vibrato effects, while the locking tuners provide rock-solid tuning and make string changes quick and easy.",
      on: false
    });
    server.create("guitar", {
      id: 5,
      brand: "Fender",
      title: "Acoustasonic",
      category: "Stratocaster",
      year: "2019",
      price: 1649,
      img: "acoustasonic.jpeg",
      desc:
        "The American Acoustasonic™ Stratocaster® continues to embody the spirit of purposeful innovation that drives Fender guitars. The power of the Fender and Fishman®-designed Acoustic Engine is sure to deliver true inspiration. From acoustic shapeshifting to electric rhythm tones, this extremely versatile guitar creates a brand-new lane on the sonic highway.",
      on: false
    });
    server.create("guitar", {
      id: 6,
      brand: "Taylor",
      title: "Academy 10e",
      category: "Acoustic",
      year: "2019",
      price: 699,
      img: "Academy 10e-Front.png",
      desc:
        "Designed with newer guitar players in mind - but appealing to experienced players as well, the Academy 10e combines the rich voice of the Dreadnought body shape with a comfortable feel that will encourage beginners to grow their skills. A solid spruce top serves up plenty of volume and articulation, making this a musically versatile choice for players wanting a guitar with a broad sonic range. In this model, the slender Taylor neck features a slightly narrower nut width of 1-11/16', helping make chords and notes easier to hold, and the armrest takes some pressure off your strumming arm. The Academy 10e includes an ES-B pickup with a built-in digital tuner and a gig bag.",
      on: false
    });
    server.create("guitar", {
      id: 7,
      brand: "Taylor",
      title: "600 Grand Auditorium",
      category: "Acoustic",
      year: "2021",
      price: 3499,
      img: "614ce-Front.png",
      desc:
        "Crafted with solid Big Leaf maple back and sides and a torrefied Sitka spruce top, the Taylor 614ce offers an updated take on what players may know as the maple sound. Revoiced by Andy Powers to generate more warmth and openness, this Grand Auditorium takes a boost from the V-Class bracing inside, which adds volume and sustain that complement the torrefied top's extra sweetness and depth. The result is a guitar with a highly player-reflective sound, one that showcases the unique stylistic and technical quirks of each individual player. A hand-rubbed Brown Sugar stain highlights maple's natural figuring; other appointments include ebony binding, a paua/abalone rosette and Wings fretboard inlays. It ships with ES2 electronics and a hardshell case.",
      on: false
    });
    server.create("guitar", {
      id: 8,
      brand: "Taylor",
      title: "611e LTD",
      category: "Acoustic",
      year: "2010",
      price: 3499,
      img: "taylor-611-2022.jpeg",
      desc:
        "With its traditionally vibrant, player-reflective sound, maple makes a natural tonewood counterpart for the bold-voiced GT body shape and its bass-boosting C-Class bracing. The all-new 611e LTD sports a beautiful set of solid, figured Big Leaf maple back and sides paired with a Sitka spruce top for a lively, surprisingly warm sound that's balanced and articulate across the tonal spectrum. The compact dimensions of the GT body shape and the easy-playing Taylor neck offer a player-friendly feel, inviting guitarists of all stripes to express their musical ideas to the fullest. This limited-edition model boasts a striking sunburst, full-gloss body (and satin-finish neck) complemented with maple binding, a single-ring paua rosette, and Mission inlays in mother-of-pearl and grained ivoroid. The 611e LTD features ES2 electronics and ships with a sturdy, lightweight AeroCase.",
      on: false
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    //this.urlPrefix = "https://77r97z-3000.csb.app/";

    this.get("/guitars", (schema, request) => {
      return schema.guitars.all();
    });

    this.post("/guitars", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.db.movies.insert(attrs);
    });
  }
});
