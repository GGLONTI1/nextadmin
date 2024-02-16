import { User } from "./models"
import { connectToDB } from "./utils"

export const addUser = async (formData) => {
  "use server"
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const newUser = new User({
      username, 
      email,
      password, 
      phone, 
      address, 
      isAdmin, 
      isActive
    });
    console.log(newUser);

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create User!");
  }
}