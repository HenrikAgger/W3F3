import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import data from "./data/data.json";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome}/>
        <Route path="/all" component={AllUsers}/>
        <Route path="/details/:index" component={Details}/>
      </Switch>
    </Router>
  );
}

const Details = ({match}) => {
  const user = data.users.find((u, index) => index==match.params.index)
  return (
    <div>
      <h3>Details</h3>
      <table>
        <tbody>
          {Object.keys(user).map((k) => {
            if (k != "picture")
            return (
              <tr>
                <td>{k}</td>
                <td>{user[k]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
        <img src={user.picture.large} />
              
      <Link to ="/all">Back</Link>
    </div>
  )
}

const AllUsers = () => {
  return (
    <div>
      <h3>All users</h3>
      <table> 
        <thead >
          <tr>
            <th></th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user, index) => {
            return (
              <tr>
                <td ><img src={user.picture.thumbnail} /></td>
                <td> {user.first}, {user.last} </td>
                <td> <Link to ={`/details/${index}`}>Details</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Link to = "/">Welcome page</Link>
    </div>
  )
}

const Welcome = () => {
  return (
    <div>
      <h3>Welcome to our friends site</h3>
      <Link to = "/all">All users</Link>      

    </div>

  )
}

export default App;
