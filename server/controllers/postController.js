const userModel = require("../models/postModel.js");

const postController = async (req, res) => {
  try {
    const { title, description, image_url, likes, company_name, package, role, status, overall_exp } = req.body;
    //validation
    if (!title) {
      return res.send({ message: "Title is required" });
    }
    if (!description) {
      return res.send({ message: "Description is required" });
    }
    if (!company_name) {
      return res.send({ message: "Company name is required" });
    }
    if (!role) {
      return res.send({ message: "Role is required" });
    }
    if (!status) {
      return res.send({ message: "Status is required" });
    }

    //save
    const user = await new userModel({
      title,
      description,
      image_url,
      likes: 0,
      company_name,
      package,
      role,
      status,
      overall_exp
    }).save();

    res.status(201).send({
      success: true,
      message: "posted",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registering User",
      error,
    });
  }
};

module.exports = {postController}