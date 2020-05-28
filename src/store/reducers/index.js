/*
 * @Author: hejp
 * @Date:   16:40
 * @Last Modified by:   hejp
 * @Last Modified time: 16:40
 */
import { combineReducers } from 'redux'
import {
    topics
} from './topics'
import {
    details
} from './details';
import {
    userInfo
} from './userInfo';

export default combineReducers({
    topics,
    details,
    userInfo
})
