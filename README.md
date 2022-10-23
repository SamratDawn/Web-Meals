# Web Meals

## Overview

Web Meals is a food delivery app which is created over the ReactJS library. It is an application that utilizes modern ReactJS hooks and features like ContextAPI to produce lightweight but efficient functionalities and executability. The app itself is connected to firebase at the backend from where it fetches its menu items and pricings. When a user places an order, the details are also relayed to the same.

## Sections

This application employs three main sections. They are as follows-

1.**Home Page**- This area contains all the food items and with each item an add button is provided to relay it to the shopping cart. The food items along with their pricing and description are fetched from firebase using an API. Any change that is to be made in the items has to be strictly done in the backend. The home page also contains the cart option in the top right corner clicking which, the current cart state of the user is displayed.

2.**Cart**- This section contains all the items selected by the user along with their respective quantities. This also showcases the total cart value. The cart option comes with two options- Order and Cancel. Clicking on the Cancel button will result in exiting the cart overlay and will take the user back to the home page. Clicking on the Order button will open up another Checkout section in the same overlay.

3.**Checkout**- The checkout section merged with the cart section prompts the user to add their name and address credentials. The checkout section comes with a Confirm button and checks for the validity of each input filed when the Confirm button is triggered. If somehow one or multiple fields are invalid, an error message is broadcasted below each invalid entry field. If there's no error, the cart order is sent to the backend and the user is furnished with a success message.

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
