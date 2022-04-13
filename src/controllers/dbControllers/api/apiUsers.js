const { User } = require('../../../database/models');

module.exports = {

    detail: async (req, res) => {
        
        let userDetail = await User.findOne({
            where: {
                id: req.params.id
            },
        });
        
        delete userDetail.dataValues.password;
        delete userDetail.dataValues.StatusId;
        delete userDetail.dataValues.statusId;

        userDetail.dataValues.avatar = 'http://localhost:3000/uploads/users/'+ userDetail.avatar;
        
        console.log(userDetail);

        return res.json({
            userData: userDetail,
        })
    },

    show: async (req, res) => {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        });

        users.forEach(oneUser => {oneUser.detail = 'api/users/' + oneUser.id})
        console.log(users.detail)
        return res.json({
            total: users.length,
            users: users  
        })
    }
}
