import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-areas:
    "nav header header"
    "nav content content"
    "nav content content";
   height: 100vh;
   width: 100%;
   grid-auto-rows: 80px 1fr;
   grid-template-columns: 220px 1fr;
   gap: 1rem; 
`
export const Nav = styled.nav`
    background: red;
    grid-area: nav;
`
export const Header = styled.header`
    background: violet;
    grid-area: header;
`
export const Main = styled.main`
    background: green;
    grid-area: content;
`