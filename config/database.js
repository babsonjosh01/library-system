const mongoose = require('mongoose')

const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.DB_STRING)
        console.log("mongo DB is connected")
    }catch(error) {
    
        console.error(error);
        process.exit(1);
    }
}
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DB_STRING, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     })

//     console.log(`MongoDB Connected: ${conn.connection.host}`)
//   } catch (err) {
//     console.error(err)
//     process.exit(1)
//   }
// }
module.exports = connectDB


// https://github.com/obyte1/InventoryManagementPhoenix.git
// LOGIN
// exports.login = async (req, res) => {
// try {
// const { email, password } = req.body;

// const user = await User.findOne({ email });
// if (!user) {
// return res.status(400).json({ message: 'Invalid credentials' });
// }

// // Compare password
// const isMatch = await bcrypt.compare(password, user.password);
// if (!isMatch) {
// return res.status(400).json({ message: 'Invalid credentials' });
// }

// // Generate token
// const token = jwt.sign(
// {
// id: user._id,
// role: user.role
// },
// process.env.JWT_SECRET,
// { expiresIn: '1d' }
// );

// res.json({
// message: 'Login successful',
// token,
// user: {
// id: user._id,
// name: user.name,
// role: user.role
// }
// });

// } catch (error) {
// res.status(500).json({ message: error.message });
// }
// };