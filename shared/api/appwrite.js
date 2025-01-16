import { Client, Account, ID, Avatars, Databases, Query, Storage } from 'react-native-appwrite';
import { config } from './appwrite-config';
// import { config } from './add-your-appwrite-config-file';

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
const storage = new Storage(client);

// Create New User : Sign-up
//->
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl
            }
        )

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

// Login with email & password : Sign-in
//->
export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

// Get Current User Deatils
//->
export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}

// Get All Posts : Descending order (Latest post first)
//->
export const getAllPosts = async () => {
    try {
        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId,
            [Query.orderDesc("$createdAt")]
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

// Get Latest Posts : Descending order (Latest post first) , Limit to 7
//->
export const getLatestPosts = async () => {
    try {
        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId,
            [Query.orderDesc("$createdAt", Query.limit(7))]
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

// Search Posts by query
//->
export const searchPosts = async (query) => {
    try {
        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId,
            [Query.search("title", query)]
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

// Get Current User's Posts
//->
export const getUserPosts = async (userId) => {
    try {
        const posts = await database.listDocuments(
            config.databaseId,
            config.videoCollectionId,
            [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

// Sign Out from app
//->
export const signOut = async () => {
    try {
        const session = await account.deleteSession("current")
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

// Fetches a file preview URL based on the file type (video or image)
//->
export const getFilePreview = async (fileId, type) => {
    let fileUrl;

    try {
        if (type === "videos") {
            fileUrl = storage.getFileView(
                config.storageId,
                fileId
            );
        }
        else if (type === "images") {
            fileUrl = storage.getFilePreview(
                config.storageId,
                fileId,
                2000,
                2000,
                "top",
                100
            );
        }
        else {
            throw new Error("Invalid file type");
        }

        if (!fileUrl) throw Error;

        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }
}

// Uploads a file and returns its preview URL after successful upload
//->
export const uploadFile = async (file, type) => {
    if (!file) return;

    const asset = {
        name: file.fileName,
        type: file.mimeType,
        size: file.fileSize,
        uri: file.uri,
    };

    try {
        const uploadFile = await storage.createFile(
            config.storageId,
            ID.unique(),
            asset
        );

        const fileUrl = await getFilePreview(uploadFile.$id, type);

        return fileUrl;
    } catch (error) {
        throw new Error(error);
    }
}

// Creates a new video post with a thumbnail and video URL after upload to storage
//->
export const createVideo = async (form) => {
    try {
        const [thumbnailUrl, videoUrl] = await Promise.all([
            uploadFile(form.thumbnail, "images"),
            uploadFile(form.video, "videos"),
        ])

        const newPost = await database.createDocument(
            config.databaseId,
            config.videoCollectionId,
            ID.unique(),
            {
                title: form.title,
                thumbnail: thumbnailUrl,
                video: videoUrl,
                prompt: form.prompt,
                creator: form.userId
            }
        )

        return newPost;
    } catch (error) {
        throw new Error(error);
    }
}