# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ideas = Idea.create(
  [
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
