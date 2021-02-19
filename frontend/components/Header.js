import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
font-size: 4rem;
margin-left: 2rem;
position: relative;
z-index: 2;
background: red;
transform: skew()(-7deg);
a {
    color: white;
}
`;

const HeaderStyles = styled.header`
.bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
}

.sub-bar {
    display: grid;
    border-bottom: 1px solid var(--black, black);
    grid-template-columns: auto 1fr;
    
}
`

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/"><h1>Website</h1></Link>
        </Logo>
      </div>
      <div className="sub-bar">
      <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}