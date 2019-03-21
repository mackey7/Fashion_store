import { createStore } from 'redux'
import reducer from '../reducers/reducer';
// import { composeWithDevTools } from "redux-devtools-extension";

function saveToLoclStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const perisitedState = loadFromLocalStorage();

export const store = createStore(
    reducer,
    perisitedState,
    // composeWithDevTools()
)

store.subscribe(() => saveToLoclStorage(store.getState()))