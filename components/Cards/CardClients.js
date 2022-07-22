import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
// components
import TableDropdownClient from "components/Dropdowns/TableDropdownClient.js";

export default function CardClients({ color }) {
  const [clients, setClients] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [isCreated, setIsCreated] = React.useState(false);
  const [client, setClient] = React.useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    sexe: "",
    phone: "",
    age: "",
    city : "",
  });



  //create a function that uses axios to get all the clients from url http://localhost:3001/client/findAll
  async function getClients() {
    const response = await axios.get("http://localhost:3001/client/findAll");
    setClients(response.data.clients);
  }
 
  async function AddClient() {
    setIsCreated(false);
   const response = await axios.post("http://localhost:3001/client/create", client);
   console.log(response.data);
    setIsCreated(true);
    setShowModal(false);
  }
  React.useEffect(() => {
    getClients();
  }, [isCreated]);
  return (
    <>
      <section>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  All Clients
                  <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Add Client
                  </button>
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  {clients.length > 0 ? (
                    Object.keys(clients[0]).map((key, index) => {
                      return (
                        <th
                          key={index}
                          className="text-left p-3 border-b border-gray-200"
                        >
                          {key}
                          
                        </th>

                      );
                    })
                  ) : (
                    <th className="text-left p-3 border-b border-gray-200">
                      No clients found
                    </th>
                  )}
                </tr>
                
              </thead>

              <tbody>
                {clients.length > 0 ? (
                  clients.map((client, index) => {
                    return (
                      <tr key={index}>
                        {Object.keys(client).map((key, index) => {
                          return (
                            <td
                              key={index}
                              className="text-left p-3 border-b border-gray-200"
                            >
                              {client[key]}
                            </td>
                          );
                        })}
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdownClient />
                  </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="text-left p-3 border-b border-gray-200">
                      No clients found
                    </td>
                  </tr>
                )}
                
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute
             inset-0 z-50 outline-none focus:outline-none"
             style={{left: "30%", top: "50%", transform: "translateY(-50%)"}}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Client
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form className="w-full max-w-xs">
                  <input type="text" id="username" name="username" placeholder="Username" 
                  value={client.username}
                  onChange={(e) => setClient({...client, username: e.target.value})}
                  />
                  <input type="text" id="password" name="password" placeholder="Password"
                  value={client.password}
                  onChange={(e) => setClient({...client, password: e.target.value})}
                  />
                  <input type="text" id="email" name="email" placeholder="Email"
                  value={client.email}
                  onChange={(e) => setClient({...client, email: e.target.value})}
                  />
                  <input type="text" id="firstName" name="firstName" placeholder="First Name"
                  value={client.firstName}
                  onChange={(e) => setClient({...client, firstName: e.target.value})}
                  />
                  <input type="text" id="lastName" name="lastName" placeholder="Last Name"
                  value={client.lastName}
                  onChange={(e) => setClient({...client, lastName: e.target.value})}
                  />
                  <input type="text" id="age" name="age" placeholder="age"
                  value={client.age}
                  onChange={(e) => setClient({...client, age: e.target.value})}
                  />
                   <input type="text" id="phone" name="phone" placeholder="Phone"
                  value={client.phone}
                  onChange={(e) => setClient({...client, phone: e.target.value})}
                  />
                   <input type="text" id="city" name="city" placeholder="city"
                  value={client.city}
                  onChange={(e) => setClient({...client, city: e.target.value})}
                  />
                   <input type="text" id="sexe" name="sexe" placeholder="sexe"
                  value={client.sexe}
                  onChange={(e) => setClient({...client, sexe: e.target.value})}
                  />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={AddClient}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

CardClients.defaultProps = {
  color: "light",
};

CardClients.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
