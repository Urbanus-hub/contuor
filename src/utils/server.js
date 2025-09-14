

export const appwriteConfig = {
    project: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apikey: import.meta.env.VITE_APPWRITE_API_KEY,
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    databases: {
        default: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    },
    collections: {
        message: import.meta.env.VITE_APPWRITE_MESSAGE_COLLECTION_ID,
        // Add collection IDs here if needed
    }
};