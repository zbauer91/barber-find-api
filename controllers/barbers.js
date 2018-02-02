const express = require('express')
const router = express.Router()

const mongoose = require('../db/barberSchema')
const search = require('../src/search')

router.get('/', (req, res) => {
  Barbers.find()
    .then(barber => res.json(barber))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  search(req.name, req.postalCode)
})

router.get('/:id', (req, res) => {
  Barbers.findById(req.params.id)
    .then(barber => res.json(barber))
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
  Barbers.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(barber => {
      res.json(barber)
    })
    .catch(err => console.log(err))
})

router.delete('./id', (req, res) => {
  Barbers.findOneAndRemove({ _id: req.params.id })
    .then(barber => {
      res.json(barber)
    })
    .catch(err => console.log(err))
})

module.exports = router
