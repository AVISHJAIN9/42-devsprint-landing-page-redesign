# F2: Dynamic JSON E-Commerce Storefront & Cart

## Overview & Architecture
Client-side e-commerce storefront in `shoping/app.js` asynchronously parsing `products.json` and managing cart state in `localStorage`.

```mermaid
sequenceDiagram
    autonumber
    actor Shopper as Customer
    participant App as app.js
    participant JSON as products.json
    participant Cart as localStorage

    App->>JSON: fetch('products.json')
    JSON-->>App: Returns product catalog array
    App->>App: addDataToHTML() renders item cards
    Shopper->>App: Clicks 'Add to Cart'
    App->>Cart: Updates cart array & serializes to localStorage
    App-->>Shopper: Updates navbar badge & cart drawer
```

## Say It Out Loud
> "In `shoping/app.js`, I engineered a lightweight client-side shopping application. The script boots by fetching a local `products.json` file, dynamically populates the product grid, and initializes the cart from `localStorage`. When shoppers add items or toggle quantities, the model updates immutably, recalculates totals, and syncs to browser storage with zero page flickering."
