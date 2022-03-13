import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      backgroundColor: string;
      secondaryBackgroundColor: string;
      textColor: string;
   }
}
