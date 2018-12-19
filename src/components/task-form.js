import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import './task-form.css'

const Form = (props) => {
    const { classes, value } = props;
    return (
        <Paper
            className={classes.taskFormPaper}
            elevation={3}
        >
            <section className={'form-title'}>
                <h1>
                    Manage Tasks
                </h1>
            </section>
            <div className={'task-form'}>
                <input
                    className={'form-controls'}
                    onChange={props.onTaskChange}
                    onKeyPress={props.onTaskKeyPress}
                    type={'text'}
                    placeholder={'Add task description and click on button "Add" or press "Enter"'}
                    value={value}
                    autoFocus={true}
                    />
                <button
                    className={'form-controls'}
                    onClick={props.onAddClick}
                    >
                    Add
                </button>
            </div>
        </Paper>
    );
};

const styles = {
    taskFormPaper: {
        padding: '16px',
        marginTop: '16px',
    },
};

export default withStyles(styles)(Form);