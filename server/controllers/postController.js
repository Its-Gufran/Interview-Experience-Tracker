const postModel = require("../models/postModel.js");

//add post
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
    const post = await new postModel({
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
      post,
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

//edit post
const editController = async (req, res) => {
  try {
    const { title, description, image_url, likes, company_name, package, role, status, overall_exp } = req.body;
    const post = await postModel.findById(req.post._id);
    
    const updatedPost = await postModel.findByIdAndUpdate(
      req.post._id,
      {
        title: title || post.title,
        description: description || post.description,
        image_url: image_url || post.image_url,
        likes: 0,
        company_name: company_name || post.company_name,
        package: package || post.package,
        role: role || post.role,
        status: status || post.status,
        overall_exp: overall_exp || post.overall_exp
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Post edited SUccessfully",
      updatedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

module.exports = {postController, editController}