# Web Meals

![NL21-Bridges-Hokkai-Suisan-banner](https://user-images.githubusercontent.com/89309086/197384613-d26d7cee-1d53-42ff-baf6-8c224f492bce.jpg)

# Overview

Web Meals is a food delivery app which is created over the ReactJS library. It is an application that utilizes modern ReactJS hooks and features like ContextAPI to produce lightweight but efficient functionalities and executability. The app itself is connected to firebase at the backend from where it fetches its menu items and pricings. When a user places an order, the details are also relayed to the same.

# Sections

This application employs three main sections. They are as follows-

1.**Home Page**- This area contains all the food items and with each item an add button is provided to relay it to the shopping cart. The food items along with their pricing and description are fetched from firebase using an API. Any change that is to be made in the items has to be strictly done in the backend. The home page also contains the cart option in the top right corner clicking which, the current cart state of the user is displayed.

2.**Cart**- This section contains all the items selected by the user along with their respective quantities. This also showcases the total cart value. The cart option comes with two options- Order and Cancel. Clicking on the Cancel button will result in exiting the cart overlay and will take the user back to the home page. Clicking on the Order button will open up another Checkout section in the same overlay.

3.**Checkout**- The checkout section merged with the cart section prompts the user to add their name and address credentials. The checkout section comes with a Confirm button and checks for the validity of each input filed when the Confirm button is triggered. If somehow one or multiple fields are invalid, an error message is broadcasted below each invalid entry field. If there's no error, the cart order is sent to the backend and the user is furnished with a success message.

# Run Locally

Download the project and run terminal in the file path. In the terminal, execute-
```
1.1. npm install
```
```
1.2. npm start
```

# UI of the Web Application

## Home Page

![1](https://user-images.githubusercontent.com/89309086/197383077-aa5ea035-4b20-464f-b9cf-b9ce42bb0e91.png)

## Cart List

![2](https://user-images.githubusercontent.com/89309086/197383098-8f1994e2-2abb-4d33-94d4-58f1d894035b.png)

## Checkout List

![3](https://user-images.githubusercontent.com/89309086/197383103-77bf051b-8e29-4666-8323-397cad27ce77.png)

## Checkout List- Invalid State

![4](https://user-images.githubusercontent.com/89309086/197383447-6f86edcb-9a3a-4beb-b03d-e070c6b493c0.png)

## Confirmed Order State

![5](https://user-images.githubusercontent.com/89309086/197383461-97c3f8b0-8857-4cdf-b397-d9c80e446433.png)


# Tech Stack Used

![HTML](https://camo.githubusercontent.com/2e4d5834c81d27fc045f0b88b20decdc467f48af1bca323ea3947844906f9023/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352532302d2532333134333534432e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465) ![CSS](https://camo.githubusercontent.com/a52cef352de6fc99770f25dec74ac6c86967ce5c2cb29ed920de88bf71b7aa38/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332532302d2532333134333534432e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465) ![JS](https://camo.githubusercontent.com/43cf8ee01bd390ad36c5e136ff1dc5160b349377b997bc697744b24333bf903b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742532302d2532333134333534432e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d7768697465) ![React](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)

# Future Prospects
