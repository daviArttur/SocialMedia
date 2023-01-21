import { NewDefaultTheme } from "./src/ui/styles/theme"

declare module 'styled-components' {
  export interface DefaultTheme extends NewDefaultTheme {}
}