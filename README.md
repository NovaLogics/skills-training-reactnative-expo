<h1 align="center" >  VidBox App <br> ♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴇxᴘᴏ ᴘʀᴏᴊᴇᴄᴛ ] ♨</h1>


## Stage 08: Feature Global State  
**Log:** January 14, 2025  

This stage involves implementing a global state management feature for handling the application's shared states like `isLoggedIn`, `loading`, and `user`. The global state is achieved using a `GlobalProvider` with React Context.  

---

## Step-by-Step Process  

### 1. Create `context` Folder  
- Add a new folder named `context` in the root directory.  
- Inside the `context` folder, create a file named `GlobalProvider.js`.  

**File Location**: `/context/GlobalProvider.js`  
👉 [View the `GlobalProvider.js` code here](./context/GlobalProvider.js)  

---

### 2. Implement GlobalProvider  
- In `GlobalProvider.js`, implement logic to store and manage the global state for:  
  - `isLoggedIn`: Boolean to track if a user is logged in.  
  - `loading`: Boolean to track loading status.  
  - `setUser`: Function to update user information.  

**Updated Code**: `/context/GlobalProvider.js`  
👉 [View the updated `GlobalProvider.js` code here](./context/GlobalProvider.js)  

---

### 3. Apply GlobalProvider in Layouts  
- Wrap the GlobalProvider around the app's `_layout.jsx` and `index.jsx` components.  

**File Location**:  
- `/app/_layout.jsx` 👉 [View `_layout.jsx` code here](./app/_layout.jsx)  
- `/app/index.jsx` 👉 [View `index.jsx` code here](./app/index.jsx)  

---

### 4. Update `appwrite.js` Config Functions  
- Write `getCurrentUser` function to integrate with the global state.  

**File Location**: `/lib/appwrite.js`  
👉 [View the `appwrite.js` code here](./lib/appwrite.js)  

---

### 5. Apply GlobalProvider in SignIn  
- Integrate the global state with the sign-in feature in `/app/(auth)/sign-in.jsx`.  

**File Location**: `/app/(auth)/sign-in.jsx`  
👉 [View the `sign-in.jsx` code here](./app/(auth)/sign-in.jsx)  

---

### 6. Apply GlobalProvider in SignUp  
- Integrate the global state with the sign-out feature in `/app/(auth)/sign-up.jsx`.  

**File Location**: `/app/(auth)/sign-up.jsx`  
👉 [View the `sign-up.jsx` code here](./app/(auth)/sign-up.jsx)  



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