# Launch-Pad-Challenge

## Commerce perspective:
As a business owner, the principle of every decision I make is profitability, in terms of cost and benefit. The cost of building online platform for users is greater than partnering with existing delivery app such as uber eat, door dash, skip the dish…. Using Uber Eat might generate a greater amount of revenue and profit simply because more users know about Uber eat and they use it more often. However, I would still build an app on our own in the long term, because we can build our own UI which might create better user experience so that our reputation can grow and generate more profit in the long run!

## Software Engineering perspective:
### A sample process of how I would approach this project.
* Project description: Outline purpose and usage of this app.
* Requirements: 
    * Goal: Users can place orders, track orders, and view receipts.
    * Use cases diagram
    * Personas (analyze targeted users)
    *	Functionality requirement 
        *	Low latency when multiple users are requesting from the server
        *	No constantly polling data from the server for tracking update
            *	Too much overhead for the server
* Design:
    *	Design main modules, submodules, interface in the submodule
    *	Sequence diagram integrated with interfaces from the submodule
* Implementation: 
    * Node.js + MongoDB
*Test: 
    * Mocking in unit test and integration test.

# API description and endpoints below:
*	MongoDB 
    *	Database name: “Launch” 
    *	Two collections
        *	User
            *	Storing current orders
            *	History receipts
        *	Menu
            * A list of all the items
*	Assume that 10:20:30:40 is the IP address of the Launch Pizza Website
    *	We could use a Domain name system to connect a real launch pizza website domain to this Ip address though 

### For the status implementation, I have a couple ideas.
1.  The backend has endpoint like this	GET    https:// 10:20:30:40/order/status  and the frontend would write client JS to do long polling by constantly 
requesting response from this API. In the backend, a function is responsible to find location information in the database and we need the delivery person to upload his/her location using GPS service to the database.
2. Use Websocket to establish a connection between frontend and backend so that any new information server can stream and pass to the client. Calculate a percentage based on current distance divided by total distance and pass it to the frontend which can display a tracking part using simple client side logic.

* GET    https:// 10:20:30:40/receipts  
    * Using sort method to create a descending list of receipt and then slice out the ones that is over one year, and then send back the JSON object.
*	GET    https:// 10:20:30:40/menu
    * Return the menu collection in a JSON format
*	POST   https:// 10:20:30:40/menu/order
    * This would insert an order in the database
*	PUT    https:// 10:20:30:40/menu/order/update
    * This would update the specific order in the database
*	DELETE https:// 10:20:30:40/menu/order/delete
    * This would provide the specific order from the database

*	Please direct to code folder to see more details

