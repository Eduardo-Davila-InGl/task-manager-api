const mongoose = require("mongoose");

mongoose.connect(process.env.atlas_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})