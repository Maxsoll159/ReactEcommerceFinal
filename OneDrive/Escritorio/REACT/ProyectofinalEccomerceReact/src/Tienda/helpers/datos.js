import Cel from '../Components/Header/img/cel.png';
import ps2 from '../Components/Header/img/consolas.jpg';
import tv from '../Components/Header/img/tv.jpg';
import moda from '../Components/Header/img/moda.jpg';
import pc2 from '../Components/Header/img/computo.jpg';
export const apifecth=()=>{
    const datos=[
       {
         "id": 5,
         "subcategory":"Aros ",
         "icon": '<i class="fa fa-mobile" aria-hidden="true"></i>',
         "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
         "price": 695,
         "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
         "category": "Celulares",
         "image": `${Cel}`,
         "rating": {
           "rate": 4.6,
           "count": 400
         }
       },
       {
         "id": 6,
         "subcategory":"Bolsos ",
         "icon":'<i class="fa fa-shopping-bag" aria-hidden="true"></i>' ,
         "title": "Solid Gold Petite Micropave ",
         "price": 168,
         "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
         "category": "Moda",
         "image": `${moda}`,
         "rating": {
           "rate": 3.9,
           "count": 70
         }
       },
       {
         "id": 7,
         "subcategory":"gorras ",
         "icon": '<i class="fa fa-laptop" aria-hidden="true"></i>',
         "title": "White Gold Plated Princess",
         "price": 9.99,
         "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
         "category": "Tecnologia",
         "image": `${pc2}`,
         "rating": {
           "rate": 3,
           "count": 400
         }
       },
       {
         "id": 8,
         "subcategory":"relog ",
         "icon":'<i class="fa fa-television" aria-hidden="true"></i>' ,
         "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
         "price": 10.99,
         "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
         "category": "Televisores",
         "image": `${tv}`,
         "rating": {
           "rate": 1.9,
           "count": 100
         }
       },
       {
        "id": 9,
        "subcategory":"relog ",
        "icon": '<i class="fa fa-gamepad" aria-hidden="true"></i>',
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "Videojuegos",
        "image": `${ps2}`,
        "rating": {
          "rate": 1.9,
          "count": 100
        }
      }
     ]
     return datos;
}