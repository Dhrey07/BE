module.exports = (app) => {
    const Waitlist = require("../controller/waitlist.controller");
  
    // Create a Login
    app.post("/waitlist/create", Waitlist.create);
    
  };