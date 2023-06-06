const Tour = require('../modal/tourModal')

// get all tours
exports.getAllTours = async (req, res) => {
  // do this thing
  try {
    // for getting all tours

    const tours = await Tour.find() // this is method for all data of database

    res.status(200).json({
      status: 'success',
      data: {
        tours: tours,
      },
    })
    // send error
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

// get one tour
exports.getTour = async (req, res) => {
  const id = req.params.id // taking id

  try {
    const tour = await Tour.findById(id)
    // for getting one tours
    res.status(200).json({
      status: 'success',
      data: {
        tours: tour,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
// create ~~
exports.createTour = async (req, res) => {
  try {
    // create tour
    const newTour = await Tour(req.body) // this is method for create data of database

    // save tour
    await newTour.save()

    res.status(200).json({
      status: 'success',
      data: {
        tours: newTour,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

// delete Tour
exports.deleteTour = async (req, res) => {
  const id = req.params.id // taking id

  try {
    await Tour.findByIdAndDelete(id) // this is method for delete data of database

    // for getting one tours
    res.status(200).json({
      status: 'success',
      data: {
        tours: 'Tour is deleted successfully',
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
exports.updateTour = async (req, res) => {
  const id = req.params.id // tour id
  console.log(req.body)

  try {
    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      runValidators: false,
      new: true,
    })

    res.status(200).json({
      status: 'success',
      data: {
        tours: tour,
      },
    })
  } catch (err) {
    console.log(err)
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}
