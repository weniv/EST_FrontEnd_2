import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expenseSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

console.log('expenseSlice: ', expenseSlice);

// const store = configureStore(
//     {
//         reducer: {
//             EXPENSE: expenseSlice.reducer
//         }
//     }
// );

const rootReducer = combineReducers({
    EXPENSE: expenseSlice.reducer,
});

// 리덕스가 localStoage 를 이용하기위한 초기 설정
const persistConfig = {
    key: 'root',
    storage: storage
}

const persistedReducers = persistReducer(persistConfig, rootReducer);


const store = configureStore(
    {
        reducer: persistedReducers,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    }
);

const persistedStore = persistStore(store);


export { store, persistedStore };