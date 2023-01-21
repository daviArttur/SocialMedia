import { theme } from "@/ui/styles/theme";
import styled from "styled-components";


export const Title = styled.h1`
  font-size: 48px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: ${p => p.theme.colors.yellow[500]};
    bottom: 5px;
    left: -0.1875rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    z-index: -1;
  }
`;