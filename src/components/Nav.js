import React from 'react';
import { NavLink } from 'dva/router';
import styles from './nav.scss';

const Navs = (BaseComponent) => class Nav extends BaseComponent {

    render() {

        return <div className={styles.container}>
            <div className={styles.navGroup}>
                <NavLink exact to='/' className={styles.nav} activeClassName={styles.active}>首页</NavLink>
                <NavLink exact to='/someThing' className={styles.nav} activeClassName={styles.active}>SomeThing</NavLink>
            </div>
            {super.render()}
        </div>
    }
}

export default Navs;