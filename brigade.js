const { events, Job, Group } = require('brigadier')

events.on("push", (brigadeEvent, project) => {
    //variables
    console.log("custom 0 started push")

})

events.on("exec", (brigadeEvent, project) => {
    //variables
    console.log("custom 1 started execi ")

})

events.on("myevent", (brigadeEvent, project) => {
    //variables
    console.log(" custom 2 started myevent")

})
