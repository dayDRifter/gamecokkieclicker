import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    counter:
    {
        type: Number,
        default: 0
    },
    points:
    {
        type: Number,
        default: 0
    },
    prizes:
    {
        type: Number,
        default: 0
    },
});

const User = mongoose.model('User', userSchema);
export default User;