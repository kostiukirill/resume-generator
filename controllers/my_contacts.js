const { prisma } = require('../prisma/prisma-client');

const now = new Date()

/**
 * @route GET /api/my_contacts/
 * @descr Getting all contacts
 * @access Private
 */

const all = async (req, res) => {
    try {
        const allPosts = await prisma.myContacts.findMany({
            where: {
                adminId: req.admin.id
            }
        })
        return res.status(200).json(allPosts)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

/**
 * @route GET /api/my_contacts/:id
 * @descr Getting unique contact
 * @access Private
 */

const uniqueCont = async (req, res) => {
    try {
        const { id } = req.params;
        const unPost = await prisma.myContacts.findFirst({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json(unPost)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

/**
 * @route POST /api/my_contacts/add
 * @descr Add new contact
 * @access Private
 */

const add = async (req, res) => {
    try {
        const data = req.body;
        const newCont = await prisma.myContacts.create({
            data: {
                ...data,
                createdAt: now,
                adminId: req.admin.id
            }
        })
        return res.status(200).json(newCont)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

/**
 * @route PUT /api/my_contacts/change/:id
 * @descr Change contact
 * @access Private
 */

const change = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params
        const changedCont = await prisma.myContacts.create({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                updatedAt: now,
                adminId: req.admin.id
            }
        })
        return res.status(200).json(changedCont)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

/**
 * @route PUT /api/my_contacts/change/:id
 * @descr Change contact
 * @access Private
 */

const remove = async (req, res) => {
    try {
        const { id } = req.params
        await prisma.myContacts.delete({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json({message: 'Contact is deleted'})
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

module.exports = {
    all,
    uniqueCont,
    add,
    change,
    remove
}