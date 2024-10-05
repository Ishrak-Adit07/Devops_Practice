import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_WEB_KEY, { expiresIn: "10d" });
};

const registerUser = async (req, res) => {
  const { name, password } = req.body;
  console.log(name);

  try {
    if (!name || !password) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const exist = await User.findOne({ name });
    if (exist) {
      return res.status(409).send({ error: "Name is already in use" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, password: hashedPassword });

    const webToken = createToken(user._id);

    return res.status(201).send({ name, webToken });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ error: e.message });
  }
};

const loginUser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).send({ error: "All fields are required" });
  }

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).send({ error: "No such name found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).send({ error: "Invalid credentials" });
    }

    const webToken = createToken(user._id);
    return res.status(200).send({ name, webToken });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ error: e.message });
  }
};

export { registerUser, loginUser };
