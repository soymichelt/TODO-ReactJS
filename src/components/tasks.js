import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import CompletedTaskIcon from '@material-ui/icons/DoneAll'
import NotCompletedTaskIcon from '@material-ui/icons/Assignment'
import blue from '@material-ui/core/colors/blue'
import blueGrey from '@material-ui/core/colors/blueGrey'

const Tasks = (props) => {
  
    const { tasks, onRemoveItemClick, onCompletedItemClick, classes } = props;
    
    return (
        <div className="task-list">
            <Paper
                className={classes.paperTasks}
                elevation={3}
            >
                <List
                    subheader={<ListSubheader component="div">Tasks List</ListSubheader>}
                    className={classes.root}
                >
                    {
                        tasks.map((item, index) =>
                            <ListItem
                                key={index}
                            >
                                <Avatar
                                    style={
                                        item.completed === true ?
                                        {
                                            backgroundColor: blue[100],
                                            color: blue[600],
                                        }
                                        :
                                        {
                                            backgroundColor: blueGrey[100],
                                            color: blueGrey[600],
                                        }
                                    }
                                >
                                    {
                                        item.completed === true ? (
                                            <CompletedTaskIcon />
                                        )
                                        : (
                                            <NotCompletedTaskIcon />
                                        )
                                    }
                                </Avatar>
                                <ListItemText
                                    primary={item.task}
                                    secondary={
                                        `Task #${index}` + (item.completed === true ? ': tarea terminada' : '')
                                    }
                                />
                                <ListItemSecondaryAction>
                                    {
                                        !item.completed && (
                                            <IconButton
                                                onClick={(e) => onCompletedItemClick(index)}
                                                aria-label="Completed"
                                            >
                                                <CheckIcon />
                                            </IconButton>
                                        )
                                    }
                                    <IconButton
                                        onClick={(e) => onRemoveItemClick(index)}
                                        aria-label="Delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    }
                </List>
            </Paper>
        </div>
    )
};

const styles = {
    paperTasks: {
        marginTop: '16px',
    },
};

export default withStyles(styles)(Tasks);

/*
<button
                                    onClick={ (event) => onCompletedItemClick(index) }
                                >
                                    Completed
                                </button>
                                <button
                                    onClick={ (event) => onRemoveItemClick(index) }
                                >
                                    Remove
                                </button>
*/