import * as React from 'react';
import { FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FieldProps } from 'react-admin';
import { Customer } from '../types';

interface Props extends FieldProps<Customer> {
    className?: string;
    size?: string;
}

const AvatarField: FC<Props> = ({ record, size = '25', className }) =>
    record ? (
        <Avatar
            // src={`${record.avatar}?size=${size}x${size}`}
            src="https://obs.line-scdn.net/0h0m8T6AGKb0IFLXgjZp0QFTFvcCxtA2kKVz9ZXGdObwBGHSBBOUwmI2UsZXcrFSxBPw/r.60x0"
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            className={className}
        />
    ) : null;

export default AvatarField;
