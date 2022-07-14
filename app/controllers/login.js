const { default: mongoose } = require('mongoose');
const model = require('../models/login')

const options = {
    page: 1,
    limit: 10
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

//get
exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
      res.send({
          items:docs 
      })
  })
}

//post
exports.insertData = (req, res) => {
   const data = req.body
   console.log(data)
   model.create(data, (err, docs) => {
    if (err) {
        res.send({ error: "ERROR"}, 500)
    } else {
       res.send({ data })
    } 
   })
}
