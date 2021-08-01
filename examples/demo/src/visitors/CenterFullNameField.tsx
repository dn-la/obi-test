import * as React from 'react';
import { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FieldProps } from 'react-admin';
import AvatarField from './AvatarField';
import { Customer } from '../types';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: '15px',
        minWidth: '200px',
    },
    avatar: {
        // marginRight: theme.spacing(1),
        // marginTop: -theme.spacing(0.5),
        // marginBottom: -theme.spacing(0.5),
    },
    name: {
        fontWeight: 'bold',
        marginTop: '15px',
    },
}));

interface Props extends FieldProps<Customer> {
    size?: string;
}

const FullNameField: FC<Props> = ({ record, size }) => {
    const classes = useStyles();
    return record ? (
        <div className={classes.root}>
            <AvatarField
                className={classes.avatar}
                record={record}
                size={size}
            />
            <div className={classes.name}>
                {/* {record.first_name} {record.last_name} */}
                Sandi
            </div>
        </div>
    ) : null;
};

FullNameField.defaultProps = {
    source: 'last_name',
    label: 'resources.customers.fields.name',
};

export default memo<Props>(FullNameField);
