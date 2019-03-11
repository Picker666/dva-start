// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import { delay } from 'dva/saga';
export default {
    namespace: 'someThing',
    state: {
        num: 0
    },
    reducers: {
        increase (state, action) {
            return { ...state, num: action.num };
        },
        decrease (state, action) {
            return { ...state, num: action.num };
        },

    },
    effects: {
        *asyncIncrease(action, { call, put }) {  // eslint-disable-line
            yield call(delay, 1000)
            yield put({ type: 'increase', num: action.num });
        },
        *asyncDecrease (action, { call, put }) {
            yield call(delay, 1000)
            yield put({ type: 'decrease', num: action.num });
        }
    },
}