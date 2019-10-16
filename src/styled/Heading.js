import styled from "styled-components";
import { rem } from "polished";
import { colors } from "../theme/colors";

export const Heading = styled.h1`
  margin: 0;
  font-size: ${rem(32)};
  padding: ${rem(8)};
  color: ${colors.secondary};
`;
