import axios from "axios";
import React, { useState } from "react";
import { Button } from "primereact/button";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);

  const addPerson = () => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setPerson([...person, ...response.data.results]);
      console.log(person);
    });
  };
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    addPerson();
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };
  return (
    <>
      <h2 className="text-center text-light fw-bold">
        Random Person Generator
      </h2>
      <p className="text-light d-flex align-items-center justify-content-center gap-4">
        Create a New Person
        <Button icon="bi bi-plus" loading={loading} onClick={load} />
      </p>
      <div className="row py-2">
        {person.map((item, index) => (
          <div key={index} className="col-xl-2 col-lg-3 my-2 col-md-4 col-xs-6">
            <div className="card">
              <div className="header">
                <div className="avatar">
                  <img src={item.picture.medium} alt="" />
                </div>
              </div>
              <div className="card-body">
                <div className="user-meta has-text-centered">
                  <h5
                    className="username"
                    title={`${item.name.first} ${item.name.last}`}
                  >
                    {item.name.first} {item.name.last}
                    <span
                      style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.5)" }}
                    >
                      ({item.dob.age})
                    </span>
                  </h5>
                  <p className="text-muted">Accountant</p>
                </div>
                <div className="user-bio has-text-centered">
                  <i className="bi bi-linkedin mx-3"></i>
                  <i className="bi bi-telephone-fill mx-3"></i>
                  <i className="bi bi-envelope-fill mx-3"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="bg"
        src="https://bi-school.ru/wp-content/uploads/2022/07/Biznes-insajt-instrumenty-sovremennogo-upravlentsa.jpg"
        alt="bg"
      />
    </>
  );
}

export default App;
