import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  selectedActivity: IActivity | null | undefined;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          />
        </List>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && <ActivityDetails activity={selectedActivity} />}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
