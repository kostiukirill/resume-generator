const { prisma } = require('../prisma/prisma-client');


let now = new Date();

/**
 * @route GET /api/about_me/
 * @desc Get full info
 * @access Private
 */

const all = async (req, res) => {
    try {
        const allInfos = await prisma.aboutMe.findMany()

        return res.status(200).json(allInfos);
    } catch (error) {
        return res.status(500).json({ message: 'Getting information is failed' })
    }
}

/**
 * @route GET /api/about_me/:id
 * @desc Get unique info
 * @access Private
 */

const infoAboutId = async (req, res) => {
    try {

        const { id } = req.params
        const uniqueInfo = await prisma.aboutMe.findFirst({
            where: {
                uniqueId: id
            }
        });

        return res.status(200).json(uniqueInfo);
    } catch (error) {
        return res.status(500).json({ message: 'Getting information is failed'})
    }
}

/**
 * @route POST /api/about_me/add
 * @desc Add new information
 * @access Private
 */

const add = async (req, res) => {
    try {
        const data =  req.body;

        if(!data.name || !data.job || !data.greeting || !data.description || !data.photo) {
            return res.status(400).json({ message: 'Please, fill in the required fields of the form'})
        }

        const infoAboutMe = await prisma.aboutMe.create({
            data: {
                ...data,
                createdAt: now,
                updatedAt: now,
                adminId: req.admin.id,
            }
        })

        return res.status(200).json(infoAboutMe)
    } catch (error) {
        return res.status(500).json({ message: 'Something is failed', id: req.admin.id })
    }
}

/**
 * @route PUT /api/about_me/change
 * @desc Change information
 * @access Private
 */

const change = async (req, res) => {
    
    try {
        const data = req.body;
        const { id } = req.params;

        const nowinfo = await prisma.aboutMe.findFirst({
            where: {
                uniqueId: id
            }
        })

        const changedInfo = await prisma.aboutMe.update({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                updatedAt: now
            }
        })

        return res.status(200).json(changedInfo);

        
    } catch (error) {
        return res.status(500).json({ message: 'Something is failed', error: error })
    }

}

/**
 * @route POST /api/about_me/remove
 * @desc Remove information
 * @access Private
 */

const remove = async (req, res) => {
    
    try {
        const { id } = req.params;
    
        await prisma.aboutMe.delete({
            where: {
                uniqueId: id
            }
        })

        return res.status(200).json({ message: `Information is deleted` })
        
    } catch (error) {
        return res.status(500).json({ message: 'Something is failed' })
    }
}

module.exports = {
    all,
    add,
    infoAboutId,
    change,
    remove
}