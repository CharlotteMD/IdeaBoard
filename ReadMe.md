#BrightIdea

What started out as a code test for a new job is now a project where I can store all my coding project ideas!

First of all, full disclosure, I used this tutorial which was AWESOME - https://www.sitepoint.com/react-rails-5-1/

Initially I tried to build it myself using MERN but I got in a bit of a mess with Redux which I'd never used before. The code test asked for a single page app which automatically updated and I'd never managed a single page app successfully before - my worst homeworks at GA! I watched several tutorials on Redux (which I think is really cool and I'm looking forward to learning more).  Then I found this tutorial so I gave it a go and I am delighted with the results!

I have a love hate relationship with Rails. I LOVE it when I can make it work! But the lack of control as the computer does most of the "making" for you really frustrates me.  For example, the code test asks for the application to automatically generate each idea with a unique idea.  This is easy in an Express/Node app as you can just write the code in.  It's more complicated in Rails as you need to tell the computer what to do rather than just do it yourself.  I may need to re-scaffold the API to include this random id.

I am really pleased that I have now created at least one successful Rails App. My side-project - Would You Rather https://github.com/CharlotteMD/would-you-rather- was going to be backend rails but after several attempts to scaffold (my models kept changing and as I said I find it complicated to change the models) I went for a MERN stack instead.  Having made this idea board I now have the confidence to go back and redo my Would You Rather app with a Rails backend.

I LOVE the Create React App way of creating a react app! It was very easy and I feel I have a much better understanding of how React works now.  Not to mention that it's really cool that I've got an app that automatically updates!

I can now more easily visualise how state and props works. The parent component (in this case IdeasContainer) has the state, and passes down versions of the data in the form of props.  The state of data can change (be deleted, updated or added to) but props cant and that's how React only refreshes the parts of the page that have been changed by changing the info that is passed to props. It also makes the code much DRYer as you can reuse templates and just pass them different data.

I also learnt how you can add extra fields to the state so you can monitor what is happening in your app and share it with the user.  For example, I include a state for the id of the idea being edited and a notification to pop up when changes had been made.  I really struggled with telling the application which idea to edit when I was working on my MERN app as I had no way of specifying which idea on the page I wanted to edit. I now know to tell the program through the state.

The styling for this project is based on Post-It notes! :) Given more time I would add a curl page effect so the tiles looked more like paper.

I've also been working on an Express/Node back end.  It works and the react front end works but I'm struggling to make "proxy" work in the package.json of the front-end which is preventing the client and server from communicating.

Future additions to this project could be:
  - login and user authentication so you can work in a team. You would be colour coded based on which idea you came up with.
  - add some kind of graph to show how many ideas had been thought of, how many were being worked on and how many had been completed each month per team.
  - Have a show page or else a module that pops up where you can learn more about the idea and perhaps leave comments to your team on how you can build on the idea.

RAILS
To run, first run the ideaboard-api, having run "bundle install" and then run "rails s -p 3001"
Then run "yarn" on the ideaboard file and then "npm start"

Node
Install yarn on the Node API, then run nodemon. Make sure you also have Mongod running.
To run the front end, install yarn in React-BrightIdea and then run npm start.
Unfortunately I have not managed to get these to run together.
