import { StackActions, NavigationActions } from 'react-navigation';

export const resetStack = (navigation,route)=>{
    const resetAction = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: route })
        ],
    });
    navigation.dispatch(resetAction);
};