module.exports = (sequelize, DataTypes) => {
   const user_audit = sequelize.define("user_audit", {
      status: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            notEmpty: true
         }
      } // Sequelize will populate createdAt and updatedAt by default
   });

   user_audit.associate = (models) => {
      user_audit.belongsTo(models.user, {
         foreignKey: {
            name: "email",
            allowNull: false
         }
      });
   };

   return user_audit;
};
