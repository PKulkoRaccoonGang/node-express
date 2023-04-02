const { Router, response, request} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', async (request, response) => {
    const courses = await Course.find()
    response.render('courses', {
        title: 'Courses',
        isCourses: true,
        courses
    })
})

router.get('/:id/edit', async (request, response) => {
    if (request.query.allow) {
        return response.redirect('/')
    }

    const course = await Course.findById(request.params.id)

    response.render('course-edit', {
        title: `Edit ${course.title}}`,
        course
    })
})

router.post('/edit', async (request, response) => {
    const { id } = request.body
    delete request.body.id
    await Course.findByIdAndUpdate(id, request.body)
    response.redirect('/courses')
})

router.get('/:id', async (request, response) => {
    const course = await Course.findById(request.params.id)
    response.render('course', {
        layout: 'empty',
        title: `Course ${course.title}`,
        course
    })
})

module.exports = router
