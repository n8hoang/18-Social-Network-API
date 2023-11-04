const users = [
    {
      username: "johndoe",
      email: "john.doe@example.com"
    },
    {
      username: "janedoe",
      email: "jane.doe@example.com"
    },
    {
      username: "mikeb",
      email: "mike.b@example.com"
    },
    {
      username: "sarahc",
      email: "sarah.c@example.com"
    },
    {
      username: "davek",
      email: "dave.k@example.com"
    },
    {
      username: "emmal",
      email: "emma.l@example.com"
    },
    {
      username: "chrisp",
      email: "chris.p@example.com"
    },
    {
      username: "oliviad",
      email: "olivia.d@example.com"
    },
    {
      username: "noahm",
      email: "noah.m@example.com"
    },
    {
      username: "lilyr",
      email: "lily.r@example.com"
    },
    {
      username: "ethanf",
      email: "ethan.f@example.com"
    },
    {
      username: "madisonh",
      email: "madison.h@example.com"
    },
    {
      username: "aaronj",
      email: "aaron.j@example.com"
    },
    {
      username: "sofiam",
      email: "sofia.m@example.com"
    },
    {
      username: "jackn",
      email: "jack.n@example.com"
    }
  ];
  
  
  const thoughts = [
    {
      thoughtText: "Here's a cool thought...",
      username: "johndoe",
      reactions: [
        { reactionBody: "Mind = blown!", username: "janedoe" },
        { reactionBody: "Could you elaborate on that?", username: "mikeb" }
      ]
    },
    {
      thoughtText: "I love the serenity of early mornings.",
      username: "janedoe",
      reactions: [
        { reactionBody: "Nothing beats a sunrise coffee.", username: "emmal" },
        { reactionBody: "The best time for a run!", username: "jackn" }
      ]
    },
    {
      thoughtText: "Running is my therapy.",
      username: "mikeb",
      reactions: [
        { reactionBody: "It's great for clearing the mind!", username: "sarahc" },
        { reactionBody: "Prefer cycling myself!", username: "ethanf" }
      ]
    },
    {
      thoughtText: "Just finished a new painting, feeling proud!",
      username: "sarahc",
      reactions: [
        { reactionBody: "Would love to see it!", username: "lilyr" },
        { reactionBody: "Art is life!", username: "sofiam" }
      ]
    },
    {
      thoughtText: "A good book is a treasure.",
      username: "davek",
      reactions: [
        { reactionBody: "Absolutely, what are you reading?", username: "chrisp" },
        { reactionBody: "Any recommendations?", username: "madisonh" }
      ]
    },
    {
      thoughtText: "Exploring coding has been a fascinating journey.",
      username: "emmal",
      reactions: [
        { reactionBody: "Keep at it, the learning never stops!", username: "johndoe" },
        { reactionBody: "What languages are you working with?", username: "aaronj" }
      ]
    },
    {
      thoughtText: "Photography captures moments in a timeless way.",
      username: "chrisp",
      reactions: [
        { reactionBody: "It's all about the perspective!", username: "oliviad" },
        { reactionBody: "Share some of your shots!", username: "janedoe" }
      ]
    },
    {
      thoughtText: "What if AI could write novels?",
      username: "oliviad",
      reactions: [
        { reactionBody: "I think it's already starting to happen!", username: "noahm" },
        { reactionBody: "But can it capture human emotions accurately?", username: "ethanf" }
      ]
    },
    {
      thoughtText: "Gardening is my form of meditation.",
      username: "noahm",
      reactions: [
        { reactionBody: "It's so rewarding to watch things grow.", username: "sarahc" },
        { reactionBody: "Any tips for beginners?", username: "lilyr" }
      ]
    },
    {
      thoughtText: "Music festivals are the highlight of my summer.",
      username: "lilyr",
      reactions: [
        { reactionBody: "Which one are you looking forward to most?", username: "mikeb" },
        { reactionBody: "Live music is the best!", username: "jackn" }
      ]
    },
    {
      thoughtText: "The universe is vast and mysterious.",
      username: "ethanf",
      reactions: [
        { reactionBody: "Thinking about it is both exciting and terrifying.", username: "davek" },
        { reactionBody: "I wonder what secrets it holds.", username: "madisonh" }
      ]
    },
    {
      thoughtText: "Sustainability should be a priority for all businesses.",
      username: "madisonh",
      reactions: [
        { reactionBody: "Absolutely, it's critical for our future.", username: "emmal" },
        { reactionBody: "Profit and planet can go hand in hand.", username: "chrisp" }
      ]
    },
    {
      thoughtText: "Virtual reality will change the future of travel.",
      username: "aaronj",
      reactions: [
        { reactionBody: "Can't wait to see where it takes us!", username: "oliviad" },
        { reactionBody: "But it'll never replace the feeling of being there in person.", username: "noahm" }
      ]
    },
    {
      thoughtText: "There's something magical about snowfall.",
      username: "sofiam",
      reactions: [
        { reactionBody: "Yes, especially when it's quiet outside.", username: "janedoe" },
        { reactionBody: "Snowball fight, anyone?", username: "jackn" }
      ]
    },
    {
      thoughtText: "Learning a new language opens up a world of opportunities.",
      username: "jackn",
      reactions: [
        { reactionBody: "It's like gaining a new lens to view the world.", username: "mikeb" },
        { reactionBody: "Duolingo has been my go-to!", username: "sarahc" }
      ]
    }
  ];
  
  
  const friends = [
    { userId: "johndoe", friendId: "janedoe" },
    { userId: "mikeb", friendId: "sarahc" },
    { userId: "davek", friendId: "emmal" },
    { userId: "chrisp", friendId: "oliviad" },
    { userId: "noahm", friendId: "lilyr" },
    { userId: "ethanf", friendId: "madisonh" },
    { userId: "aaronj", friendId: "sofiam" },
    { userId: "janedoe", friendId: "mikeb" },
    { userId: "sarahc", friendId: "davek" },
    { userId: "emmal", friendId: "chrisp" },
    { userId: "oliviad", friendId: "noahm" },
    { userId: "lilyr", friendId: "ethanf" },
    { userId: "madisonh", friendId: "aaronj" },
    { userId: "sofiam", friendId: "johndoe" },
    { userId: "jackn", friendId: "janedoe" }
  ];
  
  
  module.exports = { users, thoughts, friends };
  