import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${({ color, theme }) => color || theme.colors.background};

  > h1 {
    margin-bottom: 24px;

    color: ${({ theme }) => theme.colors.text};
    font-size: 4.8rem;

    > span {
      color: #ccc;
      text-decoration: line-through;
      font-size: 3.2rem;
    }
  }

  > p {
    margin-bottom: 16px;

    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors};
  }

  > ul {
    margin-bottom: 24px;
    width: 500px;

    li {
      margin-bottom: 8px;

      font-size: 1.6rem;
      line-height: 1.5;

      > a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.text};

        &:visited {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`;
