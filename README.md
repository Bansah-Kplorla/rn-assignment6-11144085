# rn-assignment6-11144085
Overview
This React Native project implements a shopping app with two main screens: HomeScreen for viewing available products and CartScreen for managing the cart. The app utilizes useContext for state management and AsyncStorage for local data storage.

Design Choices
Context API: Used for managing the cart state across different components, making it easier to add and remove items from the cart without prop drilling.
AsyncStorage: Chosen for local data storage to persist cart items even when the app is closed or restarted.
FlatList: Utilized for efficient rendering of the product and cart item lists, ensuring smooth performance even with a large number of items.
Modular Components: Separate components for ProductCard and context management to keep the codebase organized and maintainable.
Implementation
Cart Context: A CartContext provides methods to add and remove items from the cart. The cart state is persisted using AsyncStorage.
HomeScreen: Displays a list of available products with an "Add to Cart" button for each product.
CartScreen: Displays the items in the cart with a "Remove from Cart" button for each item.
Data Storage: AsyncStorage is used to save and load cart items to ensure the cart state is preserved across app sessions.

Screenshots
![MyScreenshot-I](https://github.com/Bansah-Kplorla/rn-assignment6-11144085/assets/170067731/0f77cdb1-c9f7-49e7-a9df-9c02e90598f1)
![MyScreenshot-II](https://github.com/Bansah-Kplorla/rn-assignment6-11144085/assets/170067731/c1442f59-b8a1-4cfe-88da-140166df9e3d)
![MyScreenshot-III](https://github.com/Bansah-Kplorla/rn-assignment6-11144085/assets/170067731/997348df-0450-4278-8aee-31a5c4c3a8c6)


