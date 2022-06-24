const { default: mongoose } = require('mongoose');
const model = require('../models/user')

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
        res.send({ error: 'ERROR'}, 422)
    } else {
       res.send({ data })
    } 
   })
}

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}