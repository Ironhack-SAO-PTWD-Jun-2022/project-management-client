import styled from 'styled-components';

const RedBox = styled.div`
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ed9a9a;
`;

const Alert = ({children}) => {
  return (
    <RedBox>
      {children}
    </RedBox>
  )
}

export default Alert;