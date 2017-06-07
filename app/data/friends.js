// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friends.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    { name: 'Ageel',
    photo: 'https://s-media-cache-ak0.pinimg.com/736x/24/ba/0e/24ba0e011503c852e248d830179fa634.jpg',
    scores: [ '4', '1', '5', '3', '3', '4', '5', '4', '3', '2' ] },
    { name: 'Trump',
        photo: 'http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg',
        scores: ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5'] } 
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;