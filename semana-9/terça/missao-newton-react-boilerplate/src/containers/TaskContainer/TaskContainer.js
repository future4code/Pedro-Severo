import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
});

const StyledList = styled(List)`
    max-width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;
`

export const TaskContainer = props => {
    return (
        <StyledList>
            <ListItem>
                <ListItemText primary="Inbox" />
            </ListItem>
            <Avatar>
                <DeleteIcon />
            </Avatar>
        </StyledList>
    )
}

TaskContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskContainer);