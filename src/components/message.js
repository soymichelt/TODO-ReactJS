import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});

const Message = ({ showMessage, onClose, message, classes }) => (
    <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        open={showMessage}
        autoHideDuration={3000}
        onClose={onClose}
        ContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
            <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={onClose}
            >
                <CloseIcon />
            </IconButton>,
        ]}
    />
);

export default withStyles(styles, { withTheme: true })(Message);