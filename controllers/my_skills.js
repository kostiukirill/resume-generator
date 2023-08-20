const { prisma } = require('../prisma/prisma-client');

const now = new Date();

/**
 * @route GET /api/my_skills/
 * @desc Getting all skills
 * @access Private 
 */

const all = async (req, res) => {
    try {
        const allSkills = await prisma.mySkills.findMany();
        
        return res.status(200).json(allSkills)
    } catch (error) {
        return res.status(500).json({ message: 'Getting all skills is failed'})
    }
}

/**
 * @route GET /api/my_skills/:id
 * @desc Getting unique skill
 * @access Private 
 */

const uniqueSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await prisma.mySkills.findFirst({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json(skill)
    } catch (error) {
        return res.status(500).json({ message: 'Getting unique skill is failed' })
    }
}

/**
 * @route POST /api/my_skills/add
 * @desc Add new skill
 * @access Private 
 */

const add = async (req, res) => {
    try {
        const data = req.body;

        if(!data.typeOfSkill || !data.focusOfSkill || !data.nameOfSkill) {
            res.status(400).json({ message: 'Please, fill required fields of the form' })
        }

        const newSkill = await prisma.mySkills.create({
            data: {
                ...data,
                createdAt: now,
                adminId: req.admin.id
            }
        })
        return res.status(200).json(newSkill)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed' })
    }
}

/**
 * @route PUT /api/my_skills/change/:id
 * @desc Change skill
 * @access Private 
 */

const change = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const chnagedSkill = await prisma.mySkills.update({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                updatedAt: now
            }
        })
        return res.status(200).json(chnagedSkill);
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed', error: error })
    }
}

/**
 * @route POST /api/my_skills/remove/:id
 * @desc Remove skill
 * @access Private 
 */

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.mySkills.delete({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json({ message: 'Skill is deleted'})
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed' })
    }
}



module.exports = {
    all,
    uniqueSkill,
    add,
    change,
    remove

}