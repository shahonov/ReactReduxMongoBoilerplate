/* istanbul ignore file */

import React from 'react';
import { connect } from 'react-redux';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    showApplicationLoader,
    hideApplicationLoader,
} from 'data/actions/applicationLoaderActions';
import { getApplicationLoader } from 'data/reducers/applicationLoader/applicationLoaderReducer';

const loaderSize = 50;

const ApplicationLoader = ({ loader }) => {
    return (
        <Backdrop style={{ zIndex: 9999 }} open={loader.isActive} >
            <CircularProgress size={loaderSize} disableShrink />
        </Backdrop>
    );
};

const mapStateToProps = state => ({
    loader: getApplicationLoader(state),
});

const mapDispatchToProps = {
    showApplicationLoader,
    hideApplicationLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationLoader);
