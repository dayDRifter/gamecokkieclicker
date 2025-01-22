import "dotenv/config";
import http from "http";
import app from "./app.js";
import { dbToConnect } from "./db/db.connect.js";
import { handleClick } from './jobs/gameLogic.js';
import User from './models/userModel.js';




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

app.get('/test', (req, res) => {
    res.json({ message: 'Hello from server!' });
})


app.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});


app.listen(PORT, async () => {
    console.log(`Server is listening on PORT ${PORT}`);
    await dbToConnect();
})
