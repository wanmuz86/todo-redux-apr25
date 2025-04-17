import {Provider} from "react-redux"
import {store} from './app/store'

// Childre - refers to all component within <ReduxProvider>
// ALl the components will have access to store, state and actions on the state
export default function ReduxProvider({children}){
    return <Provider store={store}>{children}</Provider>
}