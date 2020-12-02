// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Payesh2_db";

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
      * course
      * ------------------------------------
      */
    class course extends Sequelize.Model{}
    course.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
      level: {
        type: Sequelize.FLOAT
      },
      
      //RELATIONS
        
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _course: {
        type: Sequelize.INTEGER,
        references: {
          model: exam,
          key: '_id',
        }
      },
      _course: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "course", timestamps: false }
    );



    /**
      * ------------------------------------
      * exam
      * ------------------------------------
      */
    class exam extends Sequelize.Model{}
    exam.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
      score: {
        type: Sequelize.FLOAT
      },
      
      //RELATIONS
        
      _course:  {
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: '_id',
        },
      },
        
        
        
      _student:  {
        type: Sequelize.INTEGER,
        references: {
          model: "student",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      _exam: {
        type: Sequelize.INTEGER,
        references: {
          model: course,
          key: '_id',
        }
      },
      _exam: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "exam", timestamps: false }
    );



    /**
      * ------------------------------------
      * student
      * ------------------------------------
      */
    class student extends Sequelize.Model{}
    student.init({
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
      _student: {
        type: Sequelize.INTEGER,
        references: {
          model: course,
          key: '_id',
        }
      },
      _student: {
        type: Sequelize.INTEGER,
        references: {
          model: exam,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "student", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    course.belongsToMany(exam, {
        through: "course__exam",
        as: "_exam",
        foreignKey: "id_course",
        otherKey: "id_exam",
        timestamps: false
    });

    course.belongsToMany(student, {
        through: "course__student",
        as: "_student",
        foreignKey: "id_course",
        otherKey: "id_student",
        timestamps: false
    });

    
    
    student.belongsToMany(course, {
        through: "student__course",
        as: "_course",
        foreignKey: "id_student",
        otherKey: "id_course",
        timestamps: false
    });

    student.belongsToMany(exam, {
        through: "student__exam",
        as: "_exam",
        foreignKey: "id_student",
        otherKey: "id_exam",
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
