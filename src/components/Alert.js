import styled from 'styled-components';

const RedBox = styled.div`
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) => props.status === 'error' ? '#ed9a9a' : '#9aed9a'};
`;

const Alert = ({children, status = 'error'}) => {
  return (
    <RedBox status={status}>
      {children}
    </RedBox>
  )
}

export default Alert;