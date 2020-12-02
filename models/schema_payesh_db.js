// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Payesh_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Exam
      * ------------------------------------
      */
    class Exam extends Sequelize.Model{}
    Exam.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Gradee: {
        type: Sequelize.FLOAT
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      _students:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Student",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      _exams: {
        type: Sequelize.INTEGER,
        references: {
          model: Student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "exam", timestamps: false }
    );



    /**
      * ------------------------------------
      * Student
      * ------------------------------------
      */
    class Student extends Sequelize.Model{}
    Student.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Family: {
        type: Sequelize.STRING
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _students: {
        type: Sequelize.INTEGER,
        references: {
          model: Exam,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "student", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    Student.belongsToMany(Exam, {
        through: "Student__exams",
        as: "_exams",
        foreignKey: "id_Student",
        otherKey: "id_Exam",
        timestamps: false
    });

    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
