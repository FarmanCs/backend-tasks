import todo from "../models/todo.js"

export const Add_Todo_list = async (req, res) => {
   // const { title, description, author } = req.body
   const todo_data = new todo(req.body)
   const Data = await todo_data.save()
   res.status(201).json(
      {
         message: "list added",
         Data
      }
   )
}

export const get_ToDo_Data = async (req, res) => {
   const todo_Data = await todo.find().select('-_id -__v -password')
   res.status(200).json(
      {
         message: "All todos list",
         length: todo_Data.length,
         todo_Data
      }
   )
}

// export const getUser = async (req, res) => {
//    const userId = req.params.id
//    // const userData = await user.findOne({ _id: userId }).select('-__v -password')
//    const userData = await user.findById(userId).select('-__v -password')
//    res.status(200).json(
//       {
//          message: " user",
//          userData
//       }
//    )
// }

// export const deleteUser = async (req, res) => {
//    const userId = req.params.id
//    const userData = await user.findOneAndDelete(userId)
//    res.status(200).json(
//       {
//          message: " user Deleted",
//       }
//    )
// }
// export const updateUser = async (req, res) => {
//    const userId = req.params.id
//    const { name, email } = req.body
//    const userData = await user.findByIdAndUpdate({ _id: userId }, req.body, { new: true })
//    res.status(200).json(
//       {
//          message: " user Updated successfuly..",
//          userData
//       }
//    )
// }