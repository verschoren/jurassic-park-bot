export default {
  async fetch(request, env) {
    try {
      const { pathname } = new URL(request.url);

      if (pathname.startsWith("/status")) {
        const randomNumber = Math.ceil(Math.random() * 4)
        console.log(randomNumber)
        var scenario = {};
        if (randomNumber == 1){
          scenario = {"status":"all_good"}
        }
        else if (randomNumber == 2){
          scenario = {"status":"unlocked_trex"}
        }
        else if (randomNumber == 3){
          scenario = {"status":"unlocked_raptor"}
        }
        else if (randomNumber == 4){
          scenario = {"status":"evacuate"}
        } else {

        }
        return new Response(JSON.stringify(scenario),{
          headers: {
            "content-type": "application/json",
          }
        });
      }

      if (pathname.startsWith("/order")) {
        /*
        {"order_id":"1234"}
        */
        var payload = await request.json();
        console.log(payload)
        var randomOrder = getRandomItem()
        console.log(randomOrder);
        randomOrder.order_id = 'ORD'+payload.order_id;
        return new Response(JSON.stringify(randomOrder),{
          headers: {
            "content-type": "application/json",
          }
        });
      }

      return new Response("no path");
    } catch(e) {
      return new Response(err.stack, { status: 500 })
    }
  }
}

function getRandomItem() {
  var orders = [{
	"order_status": "confirmed",
	"order_id": "ORD1234",
	"order_date": "June 2nd",
	"items": [{
			"name": "Jurassic Park Adventure Park",
			"type": "attraction",
			"ticket_type": "1-Day Park Hopper",
			"ticket_price": 150.00,
			"quantity": 2
		},
		{
			"name": "Jurassic Park Hotel",
			"type": "hotel",
			"room_type": "Deluxe Room",
			"room_price": 350.00,
			"nights": 3
		}
	]
}, {
	"order_status": "pending",
	"order_id": "ORD5678",
	"order_date": "November 11th",
	"items": [{
			"name": "Jurassic Park Park",
			"type": "attraction",
			"ticket_type": "2-Day Park Hopper",
			"ticket_price": 200.00,
			"quantity": 4
		},
		{
			"name": "Jurassic Park Hotel",
			"type": "hotel",
			"room_type": "Standard Room",
			"room_price": 250.00,
			"nights": 2
		}
	]
}, {
	"order_status": "cancelled",
	"order_id": "ORD2468",
	"order_date": "May 4th 2023",
	"items": [{
			"name": "Jurassic Park",
			"type": "attraction",
			"ticket_type": "1-Day Park Hopper",
			"ticket_price": 150.00,
			"quantity": 1
		},
		{
			"name": "Jurassic Park Dinner",
			"type": "attraction",
			"ticket_type": "Lunch",
			"ticket_price": 50.00,
			"quantity": 1
		}
	]
}, {
	"order_status": "confirmed",
	"order_id": "ORD1357",
	"order_date": "June 7h 2023",
	"items": [{
			"name": "Jurassic Park Adventure",
			"type": "attraction",
			"ticket_type": "2-Day Park Hopper",
			"ticket_price": 200.00,
			"quantity": 3
		},
		{
			"name": "Jurassic Park's Grand Hotel & Spa",
			"type": "hotel",
			"room_type": "Premium View Room",
			"room_price": 450.00,
			"nights": 4
		}
	]
}, {
	"order_status": "pending",
	"order_id": "ORD2468",
	"order_date": "April 4th 2023",
	"items": [{
			"name": "Jurassic Park",
			"type": "attraction",
			"ticket_type": "1-Day Park Hopper",
			"ticket_price": 150.00,
			"quantity": 2
		},
		{
			"name": "Jurassic Park's Paradise Pier Hotel",
			"type": "hotel",
			"room_type": "Standard View Room",
			"room_price": 300.00,
			"nights": 1
		}
	]
}]
  // Generate a random index within the array
  const randomIndex = Math.floor(Math.random() * orders.length)
	console.log(randomIndex);
  // Return the item at the random index
  return orders[randomIndex]
}

