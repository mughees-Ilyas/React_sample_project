import React from 'react'
import styled, {css} from "styled-components";
import { rem } from "polished";
import { colors } from "../theme/colors";

const style = () => css`
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
`;

const FjInputFieldWrapper = styled.textarea([style]);

export function TextArea({id, type, value, placeholder, onChange, rows}) {
    return (
        <FjInputFieldWrapper
            name={id}
            type={type}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}>
        </FjInputFieldWrapper>
    )
}
