import * as React from 'react';
import { SVGProps } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #75570d;
    & span {
        color: #ffbd03;
    }
`;

const Logo = (props: SVGProps<SVGSVGElement>) => {
    return (
        <StyledText>
            OBI <span>Shop</span>
        </StyledText>
    );
};

export default Logo;
