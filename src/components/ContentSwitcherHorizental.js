import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Option = styled.a`
  cursor: pointer;
  height: ${rem(40)};
  text-decoration: none;
  border-bottom: ${({ active }) => active ? `3px solid ${colors.secondary}` : `1px solid ${colors.base}`};
  display: flex;
  align-items: center;
  padding: 0 ${rem(48)};
  font-weight: normal;
`;
// horizental content switcher for request page
export function ContentSwitcherHorizental({ options = [], active, setActive }) {
    return (
        <Wrapper>
            {
                options && options.map((option) => (
                    <Option
                        key={option}
                        active={option === active}
                        onClick={() => setActive(option)}>
                        {option}
                    </Option>
                ))
            }
        </Wrapper>
    );
}
