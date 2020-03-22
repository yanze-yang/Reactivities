import { observable } from "mobx";
import { createContext } from "react";

class ActivityStore {
  @observable title = "hello";
}

export default createContext(new ActivityStore());
