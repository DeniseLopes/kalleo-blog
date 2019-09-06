const express = require('express')
const router = require('express').Router()

router.use('/', require('./postagns'))

module.exports = router