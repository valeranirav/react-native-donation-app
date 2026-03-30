This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# 📱 React Native Donation App

A cross-platform mobile application built with **React Native** that allows users to explore donation items by category and view detailed information about each cause.

The project demonstrates a clean and scalable mobile architecture with reusable UI components, structured navigation, centralized state management, and persistent storage.

---

# 🚀 Features

* Browse donation categories using horizontally scrollable tabs
* View donation items filtered by category
* Detailed donation information screen
* Search UI component
* Reusable UI components for consistent design
* State persistence across app restarts
* Clean navigation structure

---

# 📱 App Screens

### Home

`screens/Home/Home.js`

* Category selector
* Horizontally scrollable category tabs
* Donation list filtered by selected category

---

### Donation Item Details

`screens/DonationItemDetails/DonationItemDetails.js`

* Displays selected donation information
* Back navigation to Home
* Donate button UI

The donation button UI is present and can be connected to a payment gateway such as **Stripe or PayPal**.

---

# 🛠 Tech Stack

Main technologies used in this project:

| Technology       | Version |
| ---------------- | ------- |
| React            | 19.2.3  |
| React Native     | 0.84.1  |
| React Navigation | 7.x     |
| Redux Toolkit    | 2.11.2  |
| redux-persist    | 6.0.0   |
| AsyncStorage     | 3.0.1   |
| TypeScript       | 5.8.3   |

---

# 🏗 Architecture Overview

The project follows a modular architecture that separates responsibilities across navigation, state management, and UI components.

### Navigation

Navigation logic is centralized inside:

```
navigation/MainNavigation.js
```

Routes are defined in:

```
navigation/Routes.js
```

This keeps routing logic organized and scalable.

---

### State Management

Application state is managed using **Redux Toolkit** with feature-based slices.

Example structure:

```
redux/
 ├── store.js
 └── reducers/
      ├── User.js
      ├── Categories.js
      └── Donations.js
```

This ensures predictable state updates and maintainable data flow.

---

### State Persistence

Application state persists across app restarts using **redux-persist**.

Configuration:

```
redux/store.js
```

Connected in:

```
App.tsx
```

using `PersistGate`.

---

### Reusable UI Components

The UI is built from modular reusable components located in:

```
components/
```

Examples include:

* Header
* Tab
* Search
* Badge
* BackButton
* SingleDonationItem
* Button

---

# 📦 Mock Data

Categories and donation data are currently seeded directly in Redux slices.

This allows the app to run without a backend service. The data layer can later be replaced with API calls.

---

# ⚙️ Installation

### Install dependencies

```
npm install
```

---

### Run iOS

```
npx react-native run-ios
```

If native dependencies need installation:

```
cd ios
pod install
```

---

### Run Android

```
npx react-native run-android
```

---

### Start Metro

```
npm start
```

---

# 📂 Project Structure

```
App.tsx
 ├── navigation/
 │    ├── MainNavigation.js
 │    └── Routes.js
 │
 ├── redux/
 │    ├── store.js
 │    └── reducers/
 │
 ├── screens/
 │
 ├── components/
 │
 └── assets/
      ├── images
      └── styles
```

---

# 🔮 Future Improvements

Possible enhancements:

* Connect categories and donations to a backend API
* Implement search filtering logic
* Integrate payment gateway for donations
* Add authentication and user profiles
* Add analytics and monitoring

---

# 👨‍💻 Author

**Nirav Valera**

Mobile Developer specializing in **iOS and React Native applications**.

---

# 📬 Contact

LinkedIn: [Nirav Valera](https://www.linkedin.com/in/nirav-valera/)
