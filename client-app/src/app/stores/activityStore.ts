import { observable, action } from "mobx";
import { createContext } from "react";
import { IActivity } from "../models/activity";
import agent from "../api/agent";

class ActivityStore {
  @observable activities: IActivity[] = [];
  @observable selectedActivity: IActivity | undefined = undefined;
  @observable loadingInitial: boolean = false;
  @observable editMode: boolean = false;

  @action loadAvtivities = () => {
    this.loadingInitial = true;
    agent.Activities.list()
      .then(activities => {
        activities.forEach(activity => {
          activity.date = activity.date.split(".")[0];
          this.activities.push(activity);
        });
      })
      .finally(() => (this.loadingInitial = false));
  };

  @action selectActivity = (id: string) => {
    this.selectedActivity = this.activities.find(
      activity => activity.id === id
    );
    this.editMode = false;
  };
}

export default createContext(new ActivityStore());
