import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import EmployeData from "./EmployeData";

const EmployeTable = () => {
  const [user, setUser] = useState([]);

  const uderData = async () => {
    try {
      const row = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await row.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    uderData();
  }, []);

  let history = useNavigate();

  const handleDelete = (id) => {
    var index = EmployeData.map((e) => {
      return e.id;
    }).indexOf(id);
    EmployeData.splice(index, 1);
    history("/");
  };
  const handleEdit = (id, name, position) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("position", position);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user && user.length > 0
              ? user.map((items) => {
                  return (
                    <tr className="" key={items.id}>
                      <td scope="row">{items.name}</td>
                      <td>{items.email}</td>
                      <td>
                        <Link to="employe-edit">
                          <Button
                            className="me-3"
                            onClick={() => {
                              handleEdit(items.id, items.uname, items.position);
                            }}
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button onClick={() => handleDelete(items.id)}>
                          Delet
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data Found"}
          </tbody>
        </table>
        <div>
          <Link to="/employe-add">
            <Button className="w-100" size="lg">
              {" "}
              Create
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmployeTable;
