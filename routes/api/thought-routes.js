const router = require ('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require ('../../controllers/thoughtController.js');

router.route ('/')
.get(getThoughts)
.post(createThought);

router.route ('/:thoughtId/')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;