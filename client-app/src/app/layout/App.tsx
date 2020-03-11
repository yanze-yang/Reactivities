import React, { useState, useEffect } from "react";
import axios from "axios";
import { IActivity } from "./models/activity";

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
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
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
