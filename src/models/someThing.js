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
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },
}