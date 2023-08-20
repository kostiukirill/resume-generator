const { prisma } = require('../prisma/prisma-client');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization?.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const admin = await prisma.admin.findUnique({
            where: {
                id: decoded.id
            }
        })

        req.admin = admin;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Administrator is not authorizated'});
    }
}

module.exports = {
    auth
}