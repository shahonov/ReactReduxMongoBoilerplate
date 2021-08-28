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

const ApplicationLoader = ({
    applicationLoader,
}) => {
    return (
        <Backdrop style={{ zIndex: 9999 }} open={applicationLoader.isActive} >
            <CircularProgress size={loaderSize} disableShrink />
        </Backdrop>
    );
};

const mapStateToProps = state => ({
    applicationLoader: getApplicationLoader(state),
});

const mapDispatchToProps = {
    showApplicationLoader,
    hideApplicationLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationLoader);
