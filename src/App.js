import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import ClassCounterExample from './Components/ClassCountExample';
import DemoClass from "./Components/DemoClass";
import DemoTwo from './Components/DemoTwo';
import Emplye from './Components/Emplye';
import ToogleFUnctionality from './Components/ToogleFUnctionality';
import Person from './Components/Person';
import {Container, Table} from 'react-bootstrap'
 function App() {
  // emplye = [
  //   {
  //     name: "pranay",
  //     surname: "Masulkar",
  //     role: "tester",
  //     project: "real estate",
  //   },
  //   {
  //     name: "pranay",
  //     surname: "Masulkar",
  //     role: "tester",
  //     project: "real estate",
  //   },
  //   {
  //     name: "pranay",
  //     surname: "Masulkar",
  //     role: "tester",
  //     project: "real estate",
  //   },
  // ];

  const [data, setData]= useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const jsonData = await response.json();
      setData(jsonData);

    }catch (error) {
      console.log(error)
    }
  }


  // const personData ={
  //     Name: "Pranay",
  //     Surname: "Masulkar",
  //     Age:28,
  //     Mobile: 8624043380,
  //     Email: "vicky@gmail.com"
  //   }
  
  return (
    <div className="App">
      <Container className='p-5'>

      <header className="App-header">
        <ToogleFUnctionality/>
        <DemoClass/>
          <div > 
            {/* <Table bordered hover size="sm" className='text-white'>
              {data.map((item) => (
                <tbody>

                  <tr key={item.id}  className='text-white'>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}  {item.address.geo.lat}  {item.address.geo.lng} </td>
                  </tr>
                </tbody>
              ))}
          </Table>   */}
        </div>
        {/* <Emplye/>
          <Person {...personData}/>
          <DemoTwo/>
        <DemoClass/> */}
        {/* <ClassCounter/>
        <HookCounter/>
      <ClassCounterExample/> */}
        
      </header>
      </Container>
      
    </div>
  );
}

export default App;
