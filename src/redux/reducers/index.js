import { combineReducers } from 'redux';
import authReducer from "./auth.reducer"
import categoryReducer from './category.reducer';
import articleReducer from './article.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    category:categoryReducer,
    article:articleReducer,
    user:userReducer
})

export default rootReducer