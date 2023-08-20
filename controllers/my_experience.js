const { prisma } = require("../prisma/prisma-client");

const now = new Date();

/**
 * @route
 * @desc 
 * @access
 */

const all = async (req, res) => {
    try {
        const allExp = await prisma.myExperience.findMany();
        return res.status(200).json(allExp)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

/**
 * @route
 * @desc 
 * @access
 */

const uniqueExp = async (req, res) => {
    try {
        const { id } = req.params;
        const unExp = await prisma.myExperience.findFirst({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json(unExp)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

/**
 * @route
 * @desc 
 * @access
 */

const add = async (req, res) => {
    try {
        const  data  = req.body;

        if(!data.dateStart || !data.dateStop || !data.nameCompany || !data.position || !data.responsibilities) {
            return res.status(400).json({ message: 'Sosi zhopu' })
        }


         const newExp = await prisma.myExperience.create({
            data: {
                ...data,
                dateStart: new Date(data.dateStart),
                dateStop: new Date(data.dateStop),
                createdAt: now,
                adminId: req.admin.id
            }
        })
        return res.status(200).json(newExp)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed', error: error})
    }
}

/**
 * @route
 * @desc 
 * @access
 */

const change = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        const changedExp = await prisma.myExperience.update({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                dateStart: new Date(data.dateStart),
                dateStop: new Date(data.dateStop),
                updatedAt: now
            }
        })
        return res.status(200).json(changedExp)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

/**
 * @route
 * @desc 
 * @access
 */

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.myExperience.delete({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json({message: 'Exp is deleted'})
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

module.exports = {
    all,
    uniqueExp,
    add,
    change,
    remove
}