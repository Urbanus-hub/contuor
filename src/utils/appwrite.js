import { Account, Client ,ID,Databases} from "appwrite";
import { appwriteConfig } from "./server";



const client = new Client()
                .setEndpoint(appwriteConfig.endpoint)
                .setProject(appwriteConfig.project)
                


// for creating accounts
export const account = new Account(client);
// export const users = new Users(client); // Uncomment and complete if needed, or remove if not used
// for databases actions
export const databases= new Databases(client);
export const id= ID; // unique id for user






