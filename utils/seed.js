const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts, friends } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users and Thoughts if they exist
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Add users to the database
  const createdUsers = await User.insertMany(users);

  // Create a map of usernames to their generated _ids
  let userMap = {};
  createdUsers.forEach((user) => {
    userMap[user.username] = user._id;
  });
  console.log(userMap);

  // Assign each thought a username based on the original thoughts data (assuming the username field is present)
  const modifiedThoughts = thoughts.map((thought) => {
    if (!userMap[thought.username]) {
      throw new Error(`Username ${thought.username} not found in userMap.`);
    }
    return { ...thought, username: thought.username };
  });

  // Insert modified thoughts into the database
  const createdThoughts = await Thought.insertMany(modifiedThoughts);

  // Update User documents to reference the created Thought documents
  await Promise.all(createdThoughts.map((thought) => {
    return User.updateOne(
      { _id: userMap[thought.username] },
      { $push: { thoughts: thought._id } }
    );
  }));

  // Establish friend connections based on the seed data
  // Ensure you have a valid structure in `friends` to get `userId` and `friendId`
  for (const friendPair of friends) {
    const user1Id = userMap[friendPair.userId];
    const user2Id = userMap[friendPair.friendId];

    // Check if both user IDs exist before trying to add them as friends
    if (user1Id && user2Id) {
      await User.updateOne(
        { _id: user1Id },
        { $addToSet: { friends: user2Id } }
      );
      await User.updateOne(
        { _id: user2Id },
        { $addToSet: { friends: user1Id } }
      );
    } else {
      console.log(`Invalid friend pair: ${JSON.stringify(friendPair)}`);
    }
  }

  console.info('Seeding complete! 🌱');
  process.exit(0);
});

