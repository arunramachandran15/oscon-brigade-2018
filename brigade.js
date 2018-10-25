const { events, Job, Group } = require('brigadier')
console.log('Hello')
events.on("push", (brigadeEvent, project) => {
    //variables
    console.log("started push")

})

events.on("exec", (brigadeEvent, project) => {
    //variables
    console.log("started exec")

})

events.on("myevent", (brigadeEvent, project) => {
    //variables
    console.log("started myevent")

})
