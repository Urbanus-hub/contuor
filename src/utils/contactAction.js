import { ID } from "appwrite";
import { databases } from "./appwrite";
import { appwriteConfig } from "./server";

export const saveContact = async(formData) => {
     const save = await databases.createDocument(
        appwriteConfig.databases.default,
        appwriteConfig.collections.message,
        ID.unique(),
        {
            ...formData
        }
     )
     if(save.$id){
        return true;
     }
     else{
        return false;
     }
 }