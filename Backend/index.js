import "dotenv/config";
import http from "http";
import app from "./app.js";
import { dbToConnect } from "./db/db.connect.js";
import { handleClick } from './jobs/gameLogic.js';
import User from './models/userModel.js';


const server = http.createServer(app);
const PORT = process.env.PORT;


// Routes
app.post('/click', async (req, res) => {
    const { userId } = req.body;

    let user = await User.findById(userId);
    if (!user) {
        user = new User({
            counter: 0,
            points: 0,
            prizes: 0
        });
        await user.save();
    }

    const { counter, points, prizes, reward } = await handleClick(user);

    res.json({ counter, points, prizes, reward });
});

app.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});


server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
    dbToConnect();
})
