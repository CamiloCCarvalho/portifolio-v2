import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,
    
            background: string,
            text: string,
            textNav: string,
            highlight: string,
            white_violet: string,
            only_white: string,
            only_violet: string,
        }
    }
    
}
