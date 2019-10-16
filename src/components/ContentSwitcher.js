import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${rem(260)};
`;
export const Error = styled.div`
  color: ${colors.danger}
`;

export const Option = styled.a`
  cursor: pointer;
  height: ${rem(40)};
  text-decoration: none;
  background-color: ${({ active }) => active ? colors.primary : colors.secondary};
  color: ${colors.base};
  display: flex;
  align-items: center;
  padding: 0 ${rem(12)};
  font-weight: normal;
`;

// vertical switcher for manage page
export function ContentSwitcher({ options = [], active, setActive, setEdit, isEdit, data }) {
    const onChange = option => {
      if (isEdit) {
          setEdit(!isEdit);
      }
        setActive(option);
    }
  return (
    <Wrapper>

      {
        options && options.map((option) => (
          <Option
            key={option}
            active={option === active}
            onClick={() => onChange(option)}>
            {data[option].name}
          </Option>
        ))
      }
    </Wrapper>
  );
}
