import RolesModelGenerated from "./generated/RolesModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await RolesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RolesModelGenerated,
  ...customModel
};
