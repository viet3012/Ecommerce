exports.Auth = async (req, res, next) => {
  try {
    const user = req.session.currentUser;
    if (!user) {
      return res.status(403).json("You are not authenticated!");
    }
    const role = user.role;
    if (role !== "admin") {
      return res.status(201).json("not admin");
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
