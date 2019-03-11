// import React from 'react';
import { connect } from 'dva';
import SomeThing from '../components/SomeThing';
import Navs from '../components/Nav';

const mapStateToProps = (state) => {
    const { someThing: { num } } = state;

    return { num };
}
export default connect(mapStateToProps)(Navs(SomeThing));