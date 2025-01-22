export const handleClick = async (user) => {
    user.counter += 1;
    let reward = null;

    if (Math.random() < 0.5) {
        user.points += 10;
        reward = '10 Points';
    } else if (Math.random() < 0.25) {
        user.prizes += 1;
        reward = 'Prize';
    }

    await user.save();
    return { counter: user.counter, points: user.points, prizes: user.prizes, reward };
};
