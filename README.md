<h1 align="center" >  VidBox App <br> ♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴇxᴘᴏ ᴘʀᴏᴊᴇᴄᴛ ] ♨</h1>


## Stage 03: Project Structure  
**Log: January 12, 2025**


In this stage, we organize the project structure by creating layout files and initializing screens for authentication, tab navigation, and search functionality.

---

## Step-by-Step Process  

### 1. Create `app/(auth)/_layout.jsx`  
- Created a `_layout.jsx` file inside the `app/(auth)` folder. This will act as the layout for the authentication screens.  

- Installed the **ES7+ React/Redux/React-Native snippets** plugin in the code editor for faster development.  

- Typed `rnfe` to generate a sample functional component template.  

- Renamed the component to `AuthLayout`. Final code:  
```js
import { View, Text } from 'react-native'
import React from 'react'

const AuthLayout = () => {
  return (
    <View>
      <Text>AuthLayout</Text>
    </View>
  )
}

export default AuthLayout
```

---

### 2. Add Authentication Screens  
- Created the following files inside the `app/(auth)` folder:  
  - `sign-in.jsx`  
  - `sign-up.jsx`  

- Initialized each file using the `rnfe` snippet to create a functional component.  

---

### 3. Create Tab Navigation Screens  
- Created a `_layout.jsx` file inside the `app/(tabs)` folder. This will act as the layout for the tab navigation.  

- Created the following screen files inside the `app/(tabs)` folder:  
  - `bookmark.jsx`  
  - `create.jsx`  
  - `home.jsx`  
  - `profile.jsx`  

- Initialized each file using the `rnfe` snippet to create functional components.  

---

### 4. Add a Search Screen  
- Created a `[query].jsx` file inside the `app/search` folder.  

- Initialized the file using the `rnfe` snippet to create a functional component.  

<br/>

---
<br/>

See you in the next step for the development process! 🚀
