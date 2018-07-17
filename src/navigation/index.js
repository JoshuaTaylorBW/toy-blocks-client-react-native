import { createStackNavigator } from "react-navigation";
import Nodes from "../screens/Nodes";

export default createStackNavigator(
  {
    Nodes: {
      screen: Nodes
    }
  },
  {
    initialRouteName: "Nodes"
  }
);
