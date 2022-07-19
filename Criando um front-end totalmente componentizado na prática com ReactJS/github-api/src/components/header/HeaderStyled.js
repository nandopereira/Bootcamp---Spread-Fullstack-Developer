import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 4px;

  input {
    width: 100%;
    height: 44px;

    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;

    font-weight: 500;
  }

  button {
    background-color: #2c5cee;

    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #2043ae;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #fff;
    }
  }
`
