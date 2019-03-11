import React, { Component } from 'react';
import styles from './someThing.scss';

class SomeThing extends Component {
    // constructor () {
    //     super ()
    // }

    handleIncrease = () => {
        const { dispatch, num } = this.props;
        dispatch({
            type: 'someThing/increase',
            num: num + 1
        });
    }

    handleDecrease = () => {
        const { dispatch, num } = this.props;
        dispatch({
            type: 'someThing/decrease',
            num: num - 1
        });
    }

    handleAsyncIncrease = () => {
        const { dispatch, num } = this.props;
        dispatch({
            type: 'someThing/asyncIncrease',
            num: num + 1
        });
    }

    handleAsyncDecrease = () => {
        const { dispatch, num } = this.props;
        dispatch({
            type: 'someThing/asyncDecrease',
            num: num - 1
        });
    }

    render () {
        const { num } = this.props;
        return <div className={styles.someThing}>
            <p>{num}</p>
            <p>
                <button onClick={this.handleIncrease}>加加</button>
                <button onClick={this.handleDecrease}>减减</button>
                <button onClick={this.handleAsyncIncrease}>异步加加</button>
                <button onClick={this.handleAsyncDecrease}>异步减减</button>
            </p>
            this is some thing.
        </div>
    }
}

export default SomeThing;