// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_payesh2_db";
import UserModel from "../models/Payesh2_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.payesh2_db.host +
        ":" +
        properties.payesh2_db.port +
        "//" +
        properties.payesh2_db.user +
        "@" +
        properties.payesh2_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.payesh2_db.name,
      properties.payesh2_db.user,
      properties.payesh2_db.password,
      {
        host: properties.payesh2_db.host,
        dialect: properties.payesh2_db.dialect,
        port: properties.payesh2_db.port,
        logging: false
      }
    );
    this.dbConnection_payesh2_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_payesh2_db;
  }
}

export default new Database();
