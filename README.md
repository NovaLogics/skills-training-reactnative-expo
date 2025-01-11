<h1 align="center" >  Skills Training - Expo <br> ♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴇxᴘᴏ ᴘʀᴏᴊᴇᴄᴛ ] ♨</h1>

## Stage 01: Init Expo Project  
**Log: January 11, 2025**

This stage involves setting up an Expo project, configuring basic settings, and preparing for development.

---

### Step-by-Step Process  

### 1. Create a New Project Folder  
- Created a new folder with a meaningful name for the project.  
- Opened the folder in **Visual Studio Code** (VS Code).  
- Launched the integrated terminal in VS Code to initialize the project.

---

### 2. Initialize a New Expo Project  
- Initialized a new Expo project with the React template using the following command:  
```bash
npx create-expo-app ./ --template blank
```


- Once completed, the following message appeared:  
  ✅ Your project is ready!

  **To run the project, use one of these commands:**  
  - npm run android  
  - npm run ios (Requires macOS. Alternatively, use the Expo Go app for iOS development without a Mac.)  
  - npm run web  

- Installed the necessary dependencies by running:  
```bash
npx expo install expo-router expo-status-bar expo-font expo-constants expo-linking react-native-gesture-handler react-native-screens react-native-safe-area-context
```

---

### 3. Update `package.json`  
Made the following changes in the `package.json` file:

- **Added:**
```json
"main": "expo-router/entry"
```

- **Updated Fields:**  

  - **`name`**:  
    A human-readable name for the app, visible to users on the home screen or app store listings.  
    **Example:** `"name": "My Awesome App"`

  - **`slug`**:  
    A URL-friendly identifier for the app, commonly used by Expo services. It must be all lowercase, contain no spaces, and use hyphens (-) instead of spaces.  
    **Example:** `"slug": "my-awesome-app"`

  - **`scheme`**:  
    A custom URL scheme for deep linking, allowing your app to handle specific links. Typically matches the `slug` or a simplified variation of it.  
    **Example:** `"scheme": "myawesomeapp"`

---

### 4. Set Up the Project Structure  
- Created a new folder named `app`  
- Created a new file named `_layout.jsx` inside `app` 
- Moved the contents of `App.js` to a new file: `app/_layout.jsx`  
- Deleted the original `App.js` file

---

### 5. Start the Project  
- Ran the project with the following command: 
```bash 
npx expo start -c
```

- Downloaded the **Expo Go** app on a mobile device.  
- Scanned the QR code (ensured the mobile device and computer were on the same network).  
- The app opened in the Expo Go app on the device.

---

### 6. Modify the Code for Live Updates  
- Updated the content of `app/_layout.jsx`:
```js
<Text>We are live!</Text>
```

- The changes reflected immediately on the connected device, thanks to Expo's live reloading feature.

---

### 7. Personalize the App  
- Added some custom elements to the app, such as:
```js
  <Text>Hello world!</Text>
  <Text>&</Text>
  <Text>We are live!</Text>
```
<br/>

<p align="center">
<img src="./_archive/screenshot_01.png" width=200>
</p>

<br/>

### 🎉 Congratulations!  
You've successfully set up and run your first React Native Expo app! 🚀

---
<br/>

See you in the next step for the development process! 🚀
