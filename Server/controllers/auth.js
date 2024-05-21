const User = require("../models/User");
const bcrypt = require("bcrypt");

// Đăng ký
exports.signUp = async (req, res, next) => {
  try {
    const email = req.body.email;
    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const password = req.body.password;

    User.findOne({ email: email }).then((userDoc) => {
      if (userDoc) {
        return res.status(201).json("false");
      }
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new User({
          email: email,
          fullname: fullname,
          phone: phone,
          password: hashedPassword,
        });
        user.save();
      });
      return res.status(200).json("true");
    });
  } catch (err) {
    next(err);
  }
};

// Đăng nhập
exports.signIn = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then((user) => {
      if (!user) {
        return res.status(201).json("false");
      }
      bcrypt.compare(password, user.password).then((doMatch) => {
        if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.save();

          const data = { user: user, session: req.session };
          return res.status(200).json(data);
        } else {
          return res.status(201).json("false");
        }
      });
    });
  } catch (err) {
    next(err);
  }
};

// Đăng xuất
exports.logout = async (req, res, next) => {
  req.session.destroy(function (err) {
    res.status(200).end();
  });
};

// Đăng nhập Admin/Tư vấn viên
exports.signInAdmin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
      $or: [
        { email: email, role: "admin" },
        { email: email, role: "support" },
      ],
    }).then((user) => {
      if (!user) {
        return res.status(201).json("false");
      }
      bcrypt.compare(password, user.password).then((doMatch) => {
        if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.save();
          req.session.currentUser = user;
          return res.status(200).json(user);
        } else {
          return res.status(201).json("false");
        }
      });
    });
  } catch (err) {
    next(err);
  }
};
