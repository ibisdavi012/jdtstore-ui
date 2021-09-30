# Scandiweb Test Assignment

This is a minimal frontend project build in React as the UI for the project [Check backend project](https://github.com/ibisdavi012/jdtstore-backend)

## How does it work?

It basically display all the products available in the table eav_products. Then, the user is able to ADD new products and also delete them massively (selectively).

## About the design
It's very simple, no UI frameworks were used. HTML, CSS, and Javascript was manually coded.

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
