const { events, Job, Group } = require('brigadier')

events.on("push", (brigadeEvent, project) => {
    //variables
    console.log("custom 0 started push")
      var node = new Job("rarerunner")

      // We want our job to run the stock Docker Python 3 image
      node.image = "python:3"

      // Now we want it to run these commands in order:
      node.tasks = [
        "echo amfromcontainerinsidepusheventjobhaha"
      ]

      // We're done configuring, so we run the job
      node.run()

})

events.on("exec", (brigadeEvent, project) => {
    //variables
    console.log("custom 1 started execi ")
    var node = new Job("rarerunner")

      // We want our job to run the stock Docker Python 3 image
      node.image = "python:3"

      // Now we want it to run these commands in order:
      node.tasks = [
        "echo amfromcontainerinsideexeceventjobhaha"
      ]

      // We're done configuring, so we run the job
      node.run()
    

})

events.on("myevent", (brigadeEvent, project) => {
    //variables
    console.log(" custom 2 started myevent")
    
      var node = new Job("rarerunner")

      // We want our job to run the stock Docker Python 3 image
      node.image = "python:3"

      // Now we want it to run these commands in order:
      node.tasks = [
        "echo amfromcontainerinsidemyeventjobhaha"
      ]

      // We're done configuring, so we run the job
      node.run()

})
