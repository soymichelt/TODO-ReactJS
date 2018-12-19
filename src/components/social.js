import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const Social = ({ classes }) => (
    <div className={classes.socialContainer}>
        <div className={classes.social}>
            <a
                href='https://www.facebook.com/soymichelt'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.socialItem}
            >
                <img
                    src={process.env.PUBLIC_URL + '/res/fb.png'}
                    alt={'Facebook: Soymichelt'}
                />
            </a>
            <a
                href='https://twitter.com/soymichelt'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.socialItem}
            >
                <img
                    src={process.env.PUBLIC_URL + '/res/tw.png'}
                    alt={'Twitter: Soymichelt'}
                />
            </a>
            <a
                href='https://github.com/soymichelt'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.socialItem}
            >
                <img
                    src={process.env.PUBLIC_URL + '/res/gb.png'}
                    alt={'GitHub: Soymichelt'}
                />
            </a>
        </div>
    </div>
);

const styles = {
    socialContainer: {
        width: '100%',
        margin: '0 auto',
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'center'
    },
    social: {
        display: 'grid',
        width: '106px',
        gridTemplateColumns: '32px 32px 32px',
        gridGap: '5px',
    },
};

export default withStyles(styles)(Social);