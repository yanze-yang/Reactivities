import React, { useState, useEffect } from "react";
import axios from "axios";
import { IActivity } from "./models/activity";
import NavBar from "../../features/nav/NavBar";

interface IState {
  activities: IActivity[];
}

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(res => setActivities(res.data));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <div>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
