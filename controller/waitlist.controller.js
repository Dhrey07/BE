const Waitlist = require("../model/waitlist.model");

exports.create = (req, res) => {
  // console.log(req.body);
  // Validate request because in model we required the title


console.log(req.body)



if (!req.body.email) {
  return res.status(400).send({
    message: "Please enter an Email",
  });
}
  if (!req.body.first_name) {
    return res.status(400).send({
      message: "Please enter your name",
    });
  }

  Waitlist.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
    return res.status(400).json({
      error: "User already added",
    });
    const {email, first_name} =req.body;
    const waitlist = new Waitlist({email,first_name});
    waitlist
    .save()
    .then((newpost) => {
      return res.status(201).json({
        info: "New Waitlist Added",
        data: newpost,
        status: 201,
      });

      // console.log(res)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    })
  })}