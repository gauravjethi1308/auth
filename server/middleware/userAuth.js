import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    // 🔒 Check if token exists
    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized, please login again",
      });
    }

    // 🔑 Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.json({
        success: false,
        message: "Invalid token, please login again",
      });
    }

    
req.user = { id: decoded.id };
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Authentication failed: " + error.message,
    });
  }
};

export default userAuth;
