const router = require ('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require ('../../controllers/userController.js');

// api/user get all and post
router.route ('/')
.get(getUser)
.post(createUser);

// api/users/:userId getsingle user, put and delete by user's id
router.route ('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

//api/users/:userId/friends/:friendId post delete a friend id
router.route ('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;