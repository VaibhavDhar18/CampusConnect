import express from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import { JWT_SECRET } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";

await mongoose.connect("mongodb+srv://username:password@cluster0.h9x1j.mongodb.net/CampusConnect");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    mobile: String
});
const User = mongoose.model("User", UserSchema);

const signupSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/),
    firstname: z.string().min(3),
    mobile: z.string().regex(/^\d{10}$/)
});

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.post("/signup", async (req, res) => {
    const body = req.body;
    const validate = signupSchema.safeParse(body);
    if (!validate.success) {
        return res.status(400).json({ message: "Invalid inputs! Password should be min 6 character long along with at least one lowercase, uppercase and number." });
    }
    const existingUser = await User.findOne({ username: body.username });
    if (existingUser) {
        return res.status(409).json({ message: "Email already taken" });
    }
    const dbUser = await User.create(body);
    const token = jwt.sign({ userId: dbUser._id }, JWT_SECRET);
    res.status(201).json({
        message: "User created successfully",
        token: token
    });
});

const signinSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/)
});

router.post("/signin", async (req, res) => {
    const body = req.body;
    const validate = signinSchema.safeParse(body);
    if (!validate.success) {
        return res.status(400).json({ message: "Newcomer what's the hurry!Signup first" });
    }
    const existingUser = await User.findOne({ username: body.username });
    if (!existingUser) {
        return res.status(404).json({ message: "You need to signup first" });
    }
    // Password check (for demo, plaintext; in production, use bcrypt)
    if (existingUser.password !== body.password) {
        return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);
    res.status(200).json({
        token: token
    });
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});

export { router };
