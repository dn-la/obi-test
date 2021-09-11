import * as React from 'react';
import { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FieldProps } from 'react-admin';
import AvatarField from '@/components/customers/AvatarField';
import { Customer } from '@/types';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: '15px',
        minWidth: '200px',
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
                record={record}
                size={size}
            />
            <div className={classes.name}>
                {record.name}
            </div>
        </div>
    ) : null;
};

FullNameField.defaultProps = {
    source: 'last_name',
    label: 'resources.customers.fields.name',
};

export default memo<Props>(FullNameField);
