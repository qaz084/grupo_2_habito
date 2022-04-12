const { User } = require('../../../database/models');

module.exports = {

    detail: async (req, res) => {
        
        let userDetail = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id', 
                'name', 
                'email', 
                'avatar',  
                'createdAt', 
                'updatedAt', 
                'deletedAt'
            ]
            
        });        

        return res.json({
            userData: userDetail,
            avatar: 'http://localhost:3000/uploads/users/'+ userDetail.avatar
        })
    },

    show: async (req, res) => {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });
        return res.json({
            total: users.length,
            users: users  
        })
    }
}
