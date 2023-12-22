//importing json-server depenedency/package
const jsonServer=require('json-server')

//create server
const server=jsonServer.create()

//create middleware
const middleware=jsonServer.defaults()

//initializing router with resource
const router=jsonServer.router('db.json')

//implementing middleware to server
server.use(middleware)

//implementing router to server
server.use(router)

//defining PORT number
const PORT=process.env.PORT || 4000


//activating server into listening for requests
server.listen(PORT,()=>{
    console.log("Server is running in PORT:",PORT)
})


// https://www.youtube.com/watch?v=RLzC55ai0eo
// https://www.youtube.com/embed/RLzC55ai0eo
// https://www.youtube.com/embed/LHEU3tE_biU
