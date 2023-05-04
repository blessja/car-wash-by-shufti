// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Authentication token missing' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid authentication token' });
//   }
// };


// const checkOwnership = async (req, res, next) => {
//     try {
//       const carWashId = req.params.carWashId;
//       const carId = req.params.carId;
//       const userId = req.user.userId;
  
//       const user = await User.findOne({ _id: userId, carWash: carWashId, car: carId })
//         .populate({ path: 'washHistory', populate: { path: 'carWash' } })
//         .populate('carWash');
  
//       if (!user) {
//         return res.status(403).json({ message: 'Access forbidden' });
//       }
  
//       req.user = user;
//       next();
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
//   };

//   module.exports = { verifyToken, checkOwnership };