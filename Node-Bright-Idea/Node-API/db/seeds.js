const mongoose   = require('mongoose');
const { db, env } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

// REQ models
const Idea = require('../models/idea');

// Drop collections
Idea.collection.drop();

Idea.create([
  {
    title: 'R.A.OK?',
    body: 'App to help homeless - Google API, mobile first.'
  },{
    title: 'WishList',
    body: 'App to share with loved ones what you want for Christmas'
  },{
    title: 'Virtual Wardrobe',
    body: 'Upload photos of all your clothes, tag them by colour, smartness and season. Set filters to pick an outfit.'
  },{
    title: 'GuestBook',
    body: 'Display data in fun interactive ways like a virtual yearbook.'
  },{
    title: 'GetARoom',
    body: 'Allow guests to advertise what type of room and when they are looking. AirBnB owners can find them.'
  }
])
  .then(ideas => {
    console.log(`${ideas.length} ideas created! 🤷🏻‍🤷🏾‍`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
