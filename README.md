![Apple TV 4K Copy 57@1x](https://user-images.githubusercontent.com/894026/232208610-13e87b26-e4a1-4e43-a0d1-c2bef700d00c.jpg)
# Learn how to build a full-featured Flow Builder Bot for Zendesk.
See the following [Internal Note](internalnote.com/flow-builder-dinosaurs/
) article for more info.

## Endpoints
GET `https://jurassicpark.internalnote.com/status`

```
{
  "status": ["all_good","unlocked_raptor","unlocked_trex","evacuate"]
}
```

POST `https://jurassicpark.internalnote.com/order`
```
{
  "order_id":"1234"
 }
 ```
 
 Returns
 ```
 [{
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
```
 
## Screenshots
![Artboard](https://user-images.githubusercontent.com/894026/232208605-244eadc4-9bc6-4cba-964d-177eb8c31e6a.png)
![Artboard Copy](https://user-images.githubusercontent.com/894026/232208602-72e0102c-65c9-488b-a77e-b20542bdcadb.png)
Cloudflare Worker with API Endpoints for the Jurassic Park Widget Intent
![Artboard Copy 2](https://user-images.githubusercontent.com/894026/232208593-f408d520-7e1b-4d4b-9569-53414856f091.png)
![Artboard Copy 3](https://user-images.githubusercontent.com/894026/232208600-7d8c9973-844a-4da8-b6f5-9c46e40d17a9.png)

## 
