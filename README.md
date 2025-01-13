<h1 align="center" >  VidBox App <br> ♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴇxᴘᴏ ᴘʀᴏᴊᴇᴄᴛ ] ♨</h1>


## Stage 07: Connect Backend and Login/Register | Appwrite.io  
**Log:** January 13, 2025  

This stage focuses on integrating the backend using Appwrite.io for login and registration functionalities. It includes setting up Appwrite, creating necessary configurations, and implementing sign-in and sign-out functions in the app.  

---

## Step-by-Step Process  

### 1. Use Appwrite.io for Backend Functions  
- Visit `https://appwrite.io/`
- Create an account and set up the necessary **databases** and **storages** for your app.  

---

### 2. Install Appwrite.io SDK  
To install the Appwrite SDK and required dependencies, run:  
```base
npx expo install react-native-appwrite react-native-url-polyfill
```

Follow the instructions from the [Appwrite SDK for React Native GitHub page](https://github.com/appwrite/sdk-for-react-native)

---

### 3. Configure Appwrite  
- Log in to your Appwrite account and create the required **databases**, **collections**, and **storages**  
- Create a new file named `appwrite-config.js` in the `/lib` folder. Replace `add-your-appwrite-config-file.js` with the following configuration:  

**File Location**: `/lib/appwrite-config.js`  
👉 [View the `add-your-appwrite-config-file.js` code here](./lib/add-your-appwrite-config-file.js)  

```javascript
export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "yourPlatform",
    projectId: "yourId",
    databaseId: "yourId",
    userCollectionId: "yourId",
    videoCollectionId: "yourId",
    storageId: "yourId",
}
```

---

### 4. Write Config Functions  
Write functions for login and logout in a file named `appwrite.js`  

**File Location**: `/lib/appwrite.js`  
👉 [View the `appwrite.js` code here](./lib/appwrite.js)  

---

### 5. Apply Sign In Functions  
Implement the sign-in functionality in the SignIn screen.  

**File Location**: `/app/(auth)/sign-in.jsx`  
👉 [View the `sign-in.jsx` code here](./app/(auth)/sign-in.jsx)  

---

### 6. Apply Sign Out Functions  
Implement the sign-out functionality in the SignUp screen.  

**File Location**: `/app/(auth)/sign-up.jsx`  
👉 [View the `sign-up.jsx` code here](./app/(auth)/sign-up.jsx)  

<br/>

---

<br/>

<p align="center">
<img src="./_archive/screenshot_01.png" width=180>
<img src="./_archive/screenshot_02.png" width=180>
<img src="./_archive/screenshot_03.png" width=180>
</p>

---
<br/>

See you in the next step for the development process! 🚀