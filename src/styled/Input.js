import React from 'react'
import styled, {css} from "styled-components";
import { rem } from "polished";
import { colors } from "../theme/colors";

const style = (props) => css`
  display: inline-flex;
  align-items: center;
  border-radius: ${rem(4)};
  padding: ${rem(8)} ${rem(12)};
  transition: all 0.2s linear;
  border: ${rem(1)} solid ${colors.primary};
  font-size: ${rem(14)};
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border: ${rem(1)} solid ${colors.primaryDarker};
    outline: none;
  }
  &:checked {
     background-color: ${colors.primary};
     border-color: ${colors.primary};
  }
   ${props => props.width && console.log(props)&& css`
    width: ${props.width};
  `}
`;

const FjInputFieldWrapper = styled.input([style]);

export function InputField({id, type, value, placeholder, onChange, checked,width}) {
    return (
        <FjInputFieldWrapper
            style={{width:`${width}`}}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            checked={checked}
            onChange={onChange}>
        </FjInputFieldWrapper>
    )
}
