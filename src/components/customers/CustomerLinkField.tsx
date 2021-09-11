import * as React from 'react';
import { FC } from 'react';
import { Link, FieldProps } from 'react-admin';

import FullNameField from '@/components/customers/FullNameField';
import { Customer } from '@/types';

const CustomerLinkField: FC<FieldProps<Customer>> = props =>
    props.record ? (
        <FullNameField {...props} />
    ) : null;

CustomerLinkField.defaultProps = {
    source: 'customer_id',
    addLabel: true,
};

export default CustomerLinkField;
