const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Malformed token header" });
  }

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is missing from environment variables.");
    return res.status(500).json({ error: "Internal server configuration error" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired" });
    }
    return res.status(401).json({ error: "Invalid token" });
  }
};