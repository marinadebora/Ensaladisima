const app= require('./src/app');

app.listen( process.env.PORT || 4000, () =>{
    console.log(`server listening on port 4000`)
});