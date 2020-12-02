import CourseModelGenerated from "./generated/CourseModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CourseModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CourseModelGenerated,
  ...customModel
};
