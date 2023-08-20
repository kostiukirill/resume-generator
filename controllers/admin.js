const { prisma } = require( '../prisma/prisma-client' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const e = require( 'express' );

/**
 * @route POST /api/admin/login
 * @desc login to admin-acc
 * @access Public
 */

const login = async function ( req, res )  {
    try {
        const { email, password } = req.body;

        if( !email || !password ) {
            return res.status( 400 ).json( { message: 'Please, fill in the required fields of the form' } )
        }

        const admin = await prisma.admin.findFirst({
            where: {
                email,
            }
        })

        const secret = process.env.JWT_SECRET;


        const ispasswordCorrect = admin && ( await bcrypt.compare( password, admin.password ) );
        if( admin && ispasswordCorrect && secret ) {
            res.status( 200 ).json({
                id: admin.id,
                email: admin.email,
                name: admin.name,
                aboutMe: admin.aboutMe,
                mySkills: admin.mySkills,
                myProject: admin.myProject,
                myExperience: admin.myExperience,
                myBiography: admin.myBiography,
                myBlog: admin.myBlog,
                myContacts: admin.myContacts,
                token: jwt.sign( { id: admin.id }, secret, { expiresIn: '1h' } ),
            })
        } else {
            return res.status( 400 ).json( { message: 'Please, check correct of login or password' } )
        }
    } catch ( error ) {
        return res.status( 500 ).json( { message: 'Sorry, something is failed, sir' } )
    }
}
/**
 * @route POST /api/admin/register
 * @desc Register admin
 * @access Public
 */

const register = async function ( req, res ) {
    const { name, email, password } = req.body;

    try {
        

        if( !name || !email || !password ) {
            return res.status( 400 ).json( { message: 'Please, fill in the required fields of the form' } )
        }

        const isRegistered = await prisma.admin.findFirst({
            where: {
                email
            }
        })

        if( isRegistered ) {
            return res.status( 400 ).json( { message: 'Sorry, administrator is registered' } )
        }

        const salt = await bcrypt.genSalt( 10 )
        const hashedpassword = await bcrypt.hash( password, salt )

        const admin = await prisma.admin.create({
            data: {
                email,
                name,
                password: hashedpassword,
            }
        })

        const secret = process.env.JWT_SECRET;

        if( admin && secret ) {
            res.status( 201 ).json({
                id: admin.id/*name.split('').join('_')*/,
                email: admin.email,
                name,
                token: jwt.sign( { id: admin.id }, secret, { expiresIn: '1h' } ),
            })
        };
    } catch ( error ) {
        return res.status( 500 ).json( { message: 'Sorry, something is failed' } );
    }
}

const current = async (req, res) => {
    return res.status(200).json(req.admin)
}

const remove = async (req, res) => {
    const  { id }  = req.admin;

    try {
        await prisma.admin.delete({
            where: {
                id
            }
        })
        res.status(200).json({ message: 'Ok' });
    } catch (error) {
        return res.status(500).json({ message: 'Delete is failed', error })
    }
}

module.exports = {
    login,
    register,
    current,
    remove
}