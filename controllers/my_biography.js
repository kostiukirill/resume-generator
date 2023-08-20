const { prisma } = require('../prisma/prisma-client');

const now = new Date();

/**
 * @route GET /api/my_biography
 * @desc Getting all datas of my biography
 * @access Private
 */

const all = async (req, res) => {
    try {
        const allBio = await prisma.myBiography.findMany()
        return res.status(200).json(allBio);
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

/**
 *@route GET /api/my_biography/:id
 * @desc Getting unique data of my biography
 * @access Private
 */

const uniqueBio = async (req, res) => {
    try {
        const { id } = req.params;

        const uniqueBiog = await prisma.myBiography.findFirst({
            where: {
                uniqueId: id
            }
        })

        return res.status(200).json(uniqueBiog)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

/**
 * @route POST /api/my_biography/add
 * @desc Add new data of my biography
 * @access Private
 */

const add = async (req, res) => {
    try {
        const data = req.body;

        if(!data.nameCity || !data.birthDay || !data.education) {
            return res.status(400).json({ message: 'Please, fill all required fields of the form'})
        }
        
        const newBio = await prisma.myBiography.create({
            data: {
                ...data,
                createdAt: now,
                adminId: req.admin.id
            }
        })
        return res.status(200).json(newBio)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }

}

/**
 * @route PUT /api/my_biography/changed/:id
 * @desc Change data of my biography
 * @access Private
 */

const change = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const changedBio = await prisma.myBiography.update({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                updatedAt: now
            }
        })

        return res.status(200).json(changedBio)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}

/**
 * @route POST /api/my_biography/remove/:id
 * @desc Delete data of my biography
 * @access Private
 */

const remove = async (req, res) => {
    try {
        const { id } = req.params;
    
        await prisma.myBiography.delete({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json({message: 'Datas are deleted'})
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed'})
    }
}


module.exports = {
    all,
    uniqueBio,
    add,
    change,
    remove
}