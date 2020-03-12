import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activites/dashboard/ActivityDashboard";

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
    <Fragment>
      <Container style={{ marginTop: "7em" }}>
        <NavBar />
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
}

export default App;
