import { createStore, applyMiddleware, combineReducers } from "redux"
import { defaultState } from '../server/default';
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import *as sagas from "./saga.mocks"
import * as mutation from "./mutation"

// NEEDED TO RUN SAGAS
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(
    // replaced reducer function from combined reducers
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch (action.type) {
                case mutation.CREATE_TASK:
                    return [...tasks, {
                        name: "New Task",
                        id: action.taskID,
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false
                    }];
            }
            return tasks;
        },
        comments(comments = defaultState.comments) {
            return comments
        },
        groups(groups = defaultState.groups) {
            return groups
        },
        users(users = defaultState.users) {
            return users
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga])
}