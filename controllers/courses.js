const { prisma } = require('../prisma/prisma-client');

const now = new Date()

/**
 * @route GET api/my_biography/courses/
 * @desc Getting all courses
 * @access Private
 */

const all = async (req, res) => {
    try {
        const allCourses = await prisma.courses.findMany({
            where: {
                adminId: req.admin.id
            }
        })
        return res.status(200).json(allCourses);
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something id failed'})
    }
}

/**
 * @route GET api/my_biography/courses/:id
 * @desc Getting unique course
 * @access Private
 */

const uniqueCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const uniCourse = await prisma.courses.findFirst({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json(uniCourse)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something id failed'})
    }
}

/**
 * @route POST api/my_biography/courses/add
 * @desc Add new course
 * @access Private
 */

const add = async (req, res) => {
    try {
        const data = req.body;
        if(!data.typeCourse || !data.nameCourse || !data.dateStart || !data.dateStop) {
            return res.status(400).json({message: 'Please, fill all required fields in the form'})
        }
        const newCourse = await prisma.courses.create({
            data: {
                ...data,
                dateStart: new Date(data.dateStart),
                dateStop: new Date(data.dateStop),
                createdAt: now,
                adminId: req.admin.id
            }
        })
        return res.status(200).json(newCourse)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something id failed'})
    }
}

/**
 * @route PUT api/my_biography/courses/change/:id
 * @desc Add new course
 * @access Private
 */

const change = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body;
        
        const changedCourse = await prisma.courses.update({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                dateStart: new Date(data.dateStart),
                dateStop: new Date(data.dateStop),
                updatedAt: now,
            }
        })
        return res.status(200).json(changedCourse)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something id failed'})
    }
}

/**
 * @route POST api/my_biography/courses/remove/:id
 * @desc Delete course
 * @access Private
 */

const remove = async (req, res) => {
    try {
        const { id } = req.params
        
        await prisma.courses.delete({
            where: {
                uniqueId: id
            },
            
        })
        return res.status(200).json({message: 'Course is deleted'})
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something id failed'})
    }
}


module.exports = {
    all,
    uniqueCourse,
    add,
    change,
    remove
}