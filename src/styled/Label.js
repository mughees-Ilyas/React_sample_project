import styled, { css } from 'styled-components'
import { colors } from "../theme/colors";


const style = () => css`
    background:${colors.secondary};
    border-radius: 3px;
    font-size: 12px;
    color: ${colors.base};
    letter-spacing: 0;
    text-align: center;
    line-height: 22px;
    width:74px;
    height:24px;
    
    ${props => props.type === 'danger' && css`
        background:${colors.danger};
    `}
    ${props => props.type === 'success' && css`
        background:${colors.primary};
    `}
    
`;

export const Label = styled.div([style]);
