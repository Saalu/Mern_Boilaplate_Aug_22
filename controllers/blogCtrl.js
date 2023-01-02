const Blogs = require("../models/blogModel");

const blogCtrl = {
  getBlogs: async (req, res) => {
    try {
      const blogs = await Blogs.find();
      res.json(blogs);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createBlogs: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      //   res.json({})
      const newBlog = new Blogs({
        title,
        content,
        date,
        user_id: req.user.id,
        name: req.user.name,
      });
      await newBlog.save();
      res.json({ msg: "New blog created" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteBlog: async (req, res) => {
    try {
      await Blogs.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a blog" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateBlog: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      const upContent = await Blogs.findByIdAndUpdate(
        { _id: req.params.id },
        { title, content, date },
        { new: true }
      );
      res.json(upContent);
      //   res.json({ msg: "Updated a blog" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getBlog: async (req, res) => {
    try {
      const blog = await Blogs.findById(req.params.id);
      res.json(blog);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = blogCtrl;
