const crypto = require("crypto");
const UserModel = require("../models/User");
const Joi = require("joi");
module.exports = {
  create: async (req, res) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required().min(8),
    });
    try {
      await schema.validateAsync(req.body);
    } catch (err) {
      return res.json({ status: "false", message: err.message });
    }

    const hash = crypto
      .createHmac("sha256", process.env.password_key)
      .update(req.body.password)
      .digest("hex");

    try {
      const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        hash: hash,
        bio: "",
        image: "",
      });
      const result = await user.save();
      res.json({ status: "true", message: "User created !", user: result });
    } catch (err) {
      return res.json({ status: "false", message: err.message });
    }
  },

  get: async () => {},
};
