import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activites/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    IActivity | null | undefined
  >(null);

  const handleSelectActivbity = (id: string) => {
    const value = activities.find(a => a.id === id);
    setSelectedActivity(value);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(res => setActivities(res.data));
  }, []);
  return (
    <Fragment>
      <Container style={{ marginTop: "7em" }}>
        <NavBar />
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivbity}
          selectedActivity={selectedActivity}
        />
      </Container>
    </Fragment>
  );
};

export default App;
