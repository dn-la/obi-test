import * as React from 'react';
import { FC } from 'react';
import {
    ShowProps,
    useTranslate,
    FieldProps,
    TextField,
    Show,
} from 'react-admin';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

import Journey from './Journey';
import FullNameField from './CenterFullNameField';
import { Customer } from '../types';

const VisitorEdit: FC<ShowProps> = props => {
    return (
        <Show aside={<VisitorForm />} component="div" {...props}>
            <Journey />
        </Show>
    );
};

const VisitorTitle: FC<FieldProps<Customer>> = ({ record }) =>
    record ? <FullNameField record={record} size="60" /> : null;

const VisitorForm = (props: any) => {
    const translate = useTranslate();

    return (
        <Box m="0 0 1em 1em">
            <Card>
                <CardContent>
                    <Box display={{ md: 'block', lg: 'flex' }}>
                        <Box flex={1} mr={{ md: 0, lg: '1em' }}>
                            <Typography variant="h6" gutterBottom>
                                {translate(
                                    'resources.customers.fieldGroups.identity'
                                )}
                            </Typography>
                            <Box display={{ xs: 'block', sm: 'flex' }}>
                                <Box mt="1em" />
                                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
                                    <VisitorTitle record={props.record} />
                                </Box>

                                {/* <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                        <Typography gutterBottom>
                                            Last name
                                        </Typography>
                                        <TextField
                                            source="last_name"
                                            resource="customers"
                                        />
                                    </Box> */}
                            </Box>
                            <Box mt="1em" />
                            <Typography gutterBottom>Gender</Typography>
                            <Typography gutterBottom variant="body2">
                                Female
                            </Typography>
                            <Box mt="1em" />
                            <Typography gutterBottom>Member ID</Typography>
                            <Typography gutterBottom variant="body2">
                                13048
                            </Typography>
                            <Box mt="1em" />
                            <Typography gutterBottom>Phone</Typography>
                            <Typography gutterBottom variant="body2">
                                0976543219
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default VisitorEdit;
