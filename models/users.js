const bcrypt = require('bcrypt');
//"use strict";
module.exports = (sequelize, Sequelize)=>{
    var User = sequelize.define('user',{
            id: {
                type: Sequelize.INTEGER,   
                //allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'user_id'
            },
            firstName: {
                type: Sequelize.STRING,
                //allowNull: false,
                field: 'first_name'
            },
            lastName: {
                type: Sequelize.STRING,
                //allowNull: false,
                field: 'last_name'
            },      
        
            email: {
                type: Sequelize.STRING,
                isEmail: true,
                //allowNull: false,
                unique: true,
                lowercase: true,
            },

            gender:{
                type: Sequelize.STRING,
                //allowNull: false,
            },

            password: {                
                type: Sequelize.STRING,
               // allowNull: true
            },

            city: {
                type: Sequelize.STRING,
                //allowNull: true,
            },

            country: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date(),
                field: 'created_at'
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date(),
                field: 'updated_at'
            }
            
    },
    {
        tableName: 'user',    
        hooks: {
            beforeCreate: async (user) => {
             if (user.password) {
              const salt = await bcrypt.genSaltSync(10);
              user.password = bcrypt.hashSync(user.password, salt);
             }
            },
            beforeUpdate:async (user) => {
             if (user.password) {
              const salt = await bcrypt.genSaltSync(10); // saltRound = 10
              user.password = bcrypt.hashSync(user.password, salt);
             }
            }
           },
        //    instanceMethods: {
        //     validPassword: (password) => {
        //      return bcrypt.compareSync(password, this.password);
        //     }
        //    }    
            
    });

        // User.associate = function (models) {
        //     User.hasMany(models.Order);
        //     User.hasMany(models.Address);   
        //     User.hasOne(models.Payment,{
        //     foreignKey: 'id'
        // }); 

        // User.prototype.validPassword = async (password, hash) => {
        //     return await bcrypt.compareSync(password, hash);
        //    }  
      
    return User;

};

