const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')

const passportConfig = require('../passport')
const passportSignIn = passport.authenticate('local', { session: false })
const passportJWT = passport.authenticate('jwt', { session: false })

const DBController = require('../controllers/db')


//  COMPANIES
router.route('/companies/:id')
    .get(DBController.getCompany)

router.route('/companies')
    .put(passportJWT, DBController.editCompany)


// SERVICES
router.route('/services')
    .post(passportJWT, DBController.createService)


router.route('/services/:id')
    .get(DBController.getService)

router.route('/services')
    .get(DBController.getAllServices)

router.route('/services/company/:id')
    .get(DBController.getCompanyServices)


router.route('/services')
    .put(DBController.editService)

router.route('/services/:id')
    .delete(passportJWT, DBController.deleteService)




// BOOKINGS
router.route('/bookings')
    .post(DBController.createBooking)

router.route('/bookings')
    .get(passportJWT, DBController.getBookings)

module.exports = router
