const { Router } = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (request, response) => {
    response.render('add', {
        title: 'Add course',
        isAdd: true
    })
})

router.post('/', async (request, response) => {
    // const course = new Course(request.body.title, request.body.price, request.body.image)
    const course = new Course({
        title: request.body.title,
        price: request.body.price,
        image: request.body.image,
    })

    try {
        await course.save()
        response.redirect('/courses')
    } catch (e) {
        console.log(e)
    }
})

module.exports = router
