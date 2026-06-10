import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersList from "../screens/users/UsersList";
import { rootName } from "./routeNames/rootName";
import UserDetail from "../screens/users/UserDetail";

const { Navigator, Screen } = createNativeStackNavigator();

export function RootStack() {
    return (
        <Navigator>
            <Screen name={rootName.User} component={UsersList} />
            <Screen name={rootName.UserDetails} component={UserDetail} />
        </Navigator>
    );
}

