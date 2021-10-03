# Scandiweb Test Assignment

This is a minimal frontend project build in React as the UI for the project [Check backend project](https://github.com/ibisdavi012/jdtstore-backend)

## How does it work?

It basically display all the products available in the table eav_products. Then, the user is able to ADD new products and also delete them massively (selectively).

## Features
- Fetch all products. 
- In case there are no products or the connection fails, it will display a message.
- Disable/enable loader using configuration file.
- Disables input while processing the form.
- Displays error messages if fields are not properly input.
- Shows a message if there was an error trying to process the form.
- Shows a different style for selected products.

## About the design
- Fixed Header and Footer.
- Products are displayed in a grid.
- no UI frameworks were used. 

## Loader

This features shows a loading screen. It is disabled by default.

## Configuration file
Allows to disable/enable loader and setting the endpoint.

    export const config = {
        loader: false,
        endpoints: {
            products: "http://domain/products",
        },
    };

## Live version
There is a live version of the full project. 
- The [Frontend](https://frosty-darwin-651925.netlify.app/) is hosted at Netlify. 
- [Backend](https://jdtstore.000webhostapp.com/) hosted at 000webhost.
