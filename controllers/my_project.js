const { prisma } = require('../prisma/prisma-client');

const now = new Date()

/**
 * @route GET api/my_project/
 * @desc Get all projects
 * @access Private
 */

const all = async (req, res) => {
    try {
        const allProjects = await prisma.myProject.findMany();
        return res.status(200).json( allProjects)
    } catch (error) {
        return res.status(500).json({ message: 'Getting all projects is failed' });
    }
}

/**
 * @route GET api/my_project/:id
 * @desc Get unique project
 * @access Private
 */

const uniqueProject = async (req, res) => {
    try {
        const { id } = req.params;

        const relevantProject = await prisma.myProject.findUnique({
            where: {
                uniqueId: id
            }
        })

        res.status(200).json(relevantProject)
    } catch (error) {
        return res.status(500).json({ message: 'Unique project with that id isn`t found' });
    }
}

/**
 * @route POST /api/my_project/add
 * @desc Add new project
 * @access Private
 */

const add = async (req, res) => {

    try {
        const data = req.body;
    
        if(!data.projectName || !data.projectLink || !data.screenLink) {
            res.status(400).json({ message: 'Please, fill required fields of the form'})
        }
    
        const newProject = await prisma.myProject.create({
            data: {
            ...data,
            createdAt: now,
            adminId: req.admin.id
            }
        })
        return res.status(200).json(newProject)
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed' })
    }
}

/**
 * @route PUT /api/my_project/change/:id
 * @desc Change info of project
 * @access Private
 */

const change = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;

        const project = await prisma.myProject.findFirst({
            where: {
                uniqueId: id
            },
        })

        const changedProject = await prisma.myProject.update({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                updatedAt: now
            }
            
        });
        return res.status(200).json(changedProject);
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed' })
    }
}

/**
 * @route POST /api/my_project/remove/:id
 * @desc Remove info of project
 * @access Private
 */

const remove = async (req, res) => {

    try {
        const { id } = req.params;
    
        await prisma.myProject.delete({
            where: {
                uniqueId: id
            }
        });
        return res.status(200).json({message: 'Project is deleted'})
        
    } catch (error) {
        return res.status(500).json({ message: 'Sorry, something is failed' })
    }
}



module.exports = {
    all,
    uniqueProject,
    add,
    change,
    remove
}