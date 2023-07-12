// import React, { useState, useEffect } from "react";
// import { Card, Button } from "react-bootstrap";

// const DemoClass = () => {
//   const [data, setData] = useState(0);

//   useEffect(() => {}, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const jsondata = await response.json();
//       setData(jsondata);
//     } catch (error) {
//       console.log("Data Not Found");
//     }
//   };

//   return (
//     <>
//       <div>
//         {data.map((item) => (
//           <Card key={item.id}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//               <Card.Title>{item.name}</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };

// export default DemoClass;
