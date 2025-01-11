<h1 align="center" >  VidBox App <br> ♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴇxᴘᴏ ᴘʀᴏᴊᴇᴄᴛ ] ♨</h1>


## Stage 02: Project Setup  
**Log: January 12, 2025**

In this stage, the focus is on setting up the project structure, integrating NativeWind for styling, and preparing the app for further development.

---

### Step-by-Step Process  

### 1. Create `index.jsx` in the `app` Folder  
- Created a new file named `index.jsx` inside the `app` folder. This will serve as the home page or screen for the app.  

- Moved all the code from `_layout.jsx` to `index.jsx` and cleared the content of `_layout.jsx`

- Installed the **ES7+ React/Redux/React-Native snippets** plugin in the code editor to speed up development.  

- Typed `rnfes` to generate a sample component template.  

- Updated the component and renamed it to `RootLayout`. Final code:  
```js
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
```

---

### 2. Add NativeWind v4 to the Project  
- Integrated **NativeWind v4** for utility-first styling.  

- Followed the [NativeWind v4 Expo Router guide](https://www.nativewind.dev/getting-started/expo-router) for installation and setup.  

- If `babel.config.js` does not exist in the project:  
  - Ran the following command:  
    ```
    npx expo customize  
    ```

  - This command prompted options to generate different configuration files. Selected `babel.config.js` from the list.

---

### 3. Add Custom Styles and Fonts  
- Incorporated custom styling and fonts as desired. Example:  
```js
<Text className="text-3xl font-extrabold">Hello world!</Text>
```

---

### 4. Start the Project  
- Ran the project with the following command:  
```
npx expo start -c  
```

---

<p align="center">
<img src="./_archive/screenshot_01.png" width=200>
</p>

<br/>
---
<br/>

See you in the next step for the development process! 🚀
