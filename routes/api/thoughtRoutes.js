const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/ThoughtController');

// /api/thoughts
router.route('/')
  .get(getAllThoughts) // GET all thoughts
  .post(addThought);   // POST a new thought (don't forget to pass the userId in the body or URL)

// /api/thoughts/:id
router.route('/:id')
  .get(getThoughtById)    // GET a single thought by id
  .put(updateThought)     // PUT update a thought by id
  .delete(removeThought); // DELETE a thought by id

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction); // POST to add a reaction to a thought

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE to remove a reaction from a thought

module.exports = router;
