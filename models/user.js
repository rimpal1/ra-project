module.exports = (sequelize, DataTypes) => {
   const user = sequelize.define("user", {
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         primaryKey: true,
         validate: {
            notEmpty: true
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      },
      firstName: {
         type: DataTypes.STRING,
         allowNull: true
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: true
      }
   });

   user.associate = (models) => {
      user.hasMany(models.user_audit, {
         foreignKey: {
            name: "email",
            allowNull: false
         }
      });
   };

   return user;
};
