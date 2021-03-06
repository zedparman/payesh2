/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE StudentModelGenerated.js PLEASE EDIT ../StudentModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Payesh_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * StudentModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Student.create(item);
    let _exams = await result.set_exams(item._exams);
    result._exams = _exams;
        return result;
  },
  
  /**
  * StudentModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Student.destroy({ where: { _id: id } });
  },
  
  /**
  * StudentModel.findBy_courses
  *   @description CRUD ACTION findBy_courses
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_courses(key) {
    return await Database.getConnection().models.Student.findAll({ where: { "_courses": key } });
  },
  
  /**
  * StudentModel.findBy_exams
  *   @description CRUD ACTION findBy_exams
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_exams(key) {
    return await Database.getConnection().models.Student.findAll({ where: { "_exams": key } });
  },
  
  /**
  * StudentModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Student.findByPk(id);
    let _exams = await result.get_exams({ raw: true });
    result.dataValues._exams = _exams.map(item => item._id);
    
    return result;
  },
  
  /**
  * StudentModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Student.findAll();
      },
  
  /**
  * StudentModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Student.update(item, {
      where: { _id: item._id }
    });
    result = await Database.getConnection().models.Student.findByPk(item._id);
    let _exams = await result.set_exams(item._exams);
    result._exams = _exams;
    
    return result;
  },
  


};

export default generatedModel;
