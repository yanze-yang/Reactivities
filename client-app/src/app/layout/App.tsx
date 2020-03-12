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

  const [editMode, setEditMode] = useState(false);

  const handleSelectActivbity = (id: string) => {
    setSelectedActivity(activities.find(a => a.id === id));
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(res => setActivities(res.data));
  }, []);
  return (
    <Fragment>
      <Container style={{ marginTop: "7em" }}>
        <NavBar openCreateForm={handleOpenCreateForm} />
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivbity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
        />
      </Container>
    </Fragment>
  );
};

export default App;
