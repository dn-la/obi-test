import * as React from 'react';
import { FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FieldProps } from 'react-admin';
import { Customer } from '@/types';
import styled from 'styled-components';

interface Props extends FieldProps<Customer> {
    className?: string;
    size?: string;
}

const StyledAvatar = styled(Avatar)`
    & img{
        object-position: left;
    }
`

const AvatarField: FC<Props> = ({ record, size = '25', className }) =>
    record ? (
        <StyledAvatar
            src={record.avatarUrl}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            className={className}
        />
    ) : null;

export default AvatarField;
