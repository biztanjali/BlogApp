import { connectToDb } from "./connectToDatabase";
import { Post, User } from "./models";

export const getPosts = async() => {
  try{
    connectToDb();
   const posts = await Post.find()
   return posts
  }catch(err){
    console.log(err)
  }
}
export const getPost = async(slug:string) => {
  try{
    connectToDb();
   const post = await Post.findOne({slug})
   return post
  }catch(err){
    console.log(err)
  }
}

export const getUser = async(id:string) => {
  try{
    connectToDb();
   const user = await User.findById({id})
   console.log(user)
   return user
  }catch(err){
    console.log(err)
  }
}

export const getUsers = async() => {
  try{
    connectToDb();
   const users = await User.find()
   console.log(users)
   return users
  }catch(err){
    console.log(err)
  }
}