# 🏆 Ignite Teams

This is a simple and well-structured **React Native** application for managing teams and their members. The goal of the project was to continue learning **React Native** while integrating concepts such as **navigation**, **storage**, **component reuse**, and **safe area handling**.

## 🚀 Technologies Used

   * React Native

   * Expo

   * TypeScript

   * Styled-Components

   * React Navigation (```native-stack```)

   * React Native Safe Area Context

   * AsyncStorage

   * Phosphor React Native Icons

   * Babel Module Resolver (for path aliasing)

## 📱 Main Features

   * 🔤 Create new teams with custom names

   * 👥 Add and remove participants in each team

   * 🔄 Switch between teams (Time A / Time B)

   * 🧠 Persistent storage with ```AsyncStorage```, keeping teams and participants saved locally

   * 🔍 Group-specific filtering: display only participants from the selected team

   * 💾 Error handling and custom ```AppError``` class for controlled exceptions

   * 📐 Theming and consistent design using a global theme with ```styled-components```

   * 🧪 Component reuse and composition, like ```Header```, ```Highlight```, ```Input```, ```Button```, ```PlayerCard```, etc.

   * 🌗 Custom status bar styling and support for safe areas


## 🧠 What I Learned

This project helped reinforce and deepen my understanding of:

   * 📱 Structuring React Native apps with screens and components

   * ⚙️ Using ```AsyncStorage``` for saving local data

   * 📦 Implementing a domain-like architecture for storage

   * 🧭 Managing navigation between screens with parameters

   * 💅 Creating and applying custom themes with styled-components

   * 🧼 Organizing styles and applying spacing, typography, and colors consistently

   * 🎯 Managing focus and keyboard behavior with useRef and TextInput


## 🚀 Getting Started

Make sure you have Expo CLI installed:

```bash
npm install -g expo-cli
```

Then clone and run the project:

```bash
# Clone the repo
git clone https://github.com/ithauront/igniteteams
cd imhere

# Install dependencies
npm install

# Start the development server
npx expo start
```

**📱 Option 1**: Run on your physical device (recommended for beginners)

   * Install Expo Go from the Play Store or App Store

   * Scan the QR code shown in your terminal or browser after expo start

This works without needing to configure any Android SDK.

**🖥️ Option 2**: Run on an Android Emulator (requires Android Studio)

If you prefer running the app in an emulator:

  * Install Android Studio

  *  Install an Android Virtual Device (AVD) via AVD Manager

  *  Make sure your ANDROID_HOME environment variable is correctly set

  *  Then run:

 ```bash 
    npx expo start --android
```
