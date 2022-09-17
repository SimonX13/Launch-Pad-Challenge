# Launch-Pad-Challenge


## A sample process of how I would approach this project.
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
  *	Node.js + MongoDB
*Test: Mocking in unit test and integration test.


## Insight for tracking status:
This involves a delivery guy to deliver the pizza and the app showing where the delivery guy is. The delivery person would use GPS location service to show the current location and then the server needs to fetch that information. 
Using polling I would set an interval timer in the client side to constantly fetch data from the server.  Whereas to meet functional requirement, this approach is not a pass.
In a better way, I could 

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
*	GET    https:// 10:20:30:40/order/status   
* GET    https:// 10:20:30:40/receipts  
*	GET    https:// 10:20:30:40/menu
*	POST   https:// 10:20:30:40/menu/order
*	PUT    https:// 10:20:30:40/menu/order/update
*	DELETE https:// 10:20:30:40/menu/order/delete
	
*	Please direct to code folder to see more details

