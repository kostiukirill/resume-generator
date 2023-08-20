const { prisma } = require( '../prisma/prisma-client' );

const now = new Date();

/**
 * @route GET /api/my_blog/
 * @desc Getting all posts
 * @access Private
 */

const all = async (req, res) => {
    try {
        const allPosts = await prisma.myBlog.findMany({
            where: {
                adminId: req.admin.id
            }
        })
        return res.status(200).json(allPosts)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

/**
 * @route GET /api/my_blog/:id
 * @desc Getting unique posts
 * @access Private
 */

const uniquePost = async (req, res) => {
    try {
        const { id } = req.params;
        const uniPost = await prisma.myBlog.findFirst({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json(uniPost)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

/**
 * @route POST /api/my_blog/add
 * @desc Add new posts
 * @access Private
 */

const add = async (req, res) => {
    try {
        const data = req.body;

        if(!data.descr || !data.mediaLink) {
            return res.status(400).json({ message: 'Please, fill all required fields in the form'})
        }

        const newPost = await prisma.myBlog.create({
            data: {
                ...data,
                createdAt: new Date(data.createdAt) || now,
                adminId: req.admin.id
            }
        })
        return res.status(200).json(newPost)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

/**
 * @route PUT /api/my_blog/change/:id
 * @desc Change post
 * @access Private
 */

const change = async (req, res) => {
    try {
        const { id } =req.params
        const data = req.body
    
        const changedPost = await prisma.myBlog.update({
            where: {
                uniqueId: id
            },
            data: {
                ...data,
                updatedAt: new Date(data.updatedAt) || now
            }
        })
        return res.status(200).json(changedPost)
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})
    }
}

/**
 * @route POST /api/my_blog/remove/:id
 * @desc Delete post
 * @access Private
 */

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.myBlog.delete({
            where: {
                uniqueId: id
            }
        })
        return res.status(200).json({message: 'Post is deleted'})
    } catch (error) {
        return res.status(500).json({message: 'Sorry, something is failed'})        
    }
}

module.exports = {
    all,
    uniquePost,
    add,
    change,
    remove
}

