import styled from 'styled-components';

export const Container = styled.header`
background: var(--blue);`

export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;

padding: 2rem 1rem 12rem;
display: flex;
align-items: center;
justify-content: space-between;


button {
    font-size: 1rem;
    color: #ffff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0%.25rem;
    height: 3rem;

    transition: filter 0.2s; //da delay na transicao do filter para ficar mais suave

    &:hover {
        filter: brightness(0.9); //faz a cor ficar levemente mais clara no hover
    }
}
`