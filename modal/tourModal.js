const mongoose = require('mongoose')

// Tour Modal
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // our tour will be unique
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    noOfParticipants: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
      enum: ['Nature', 'Adventure', 'Ocean', 'Forest'],
    },
  },
  {
    toJSON: { virtuals: true }, // Include virtual properties in JSON
  }
)

// virtual property
tourSchema.virtual('durationInWeeks').get(function () {
  return Math.floor(this.duration / 7)
})

// middlewares
tourSchema.pre('save', function (next) {
  console.log('Will save document...')
  this.noOfParticipants = 0
  next()
})

//Modal
const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour
