/* istanbul ignore file */

import React from 'react';
import { connect } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";

import { showNotification, hideNotification } from "data/actions/notificationActions"
import { getNotification } from 'data/reducers/notification/notificationReducer';

const duration = 5000;

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification = ({
    hideNotification,
    notification,
}) => {
    const { isOpen, message, type } = notification;
    return (
        isOpen
            ?
            <div className="notification">
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                    open={isOpen}
                    autoHideDuration={duration}
                    onClose={hideNotification}>
                    <Alert onClose={hideNotification} severity={type}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
            : null
    );
};

const mapDispatchToProps = {
    showNotification,
    hideNotification,
};

const mapStateToProps = state => ({
    notification: getNotification(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
