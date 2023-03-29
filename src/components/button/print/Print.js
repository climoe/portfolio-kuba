import styled from 'styled-components';
import Colors from '../../common/Colors';

const Print = styled.button`

  display: flex;
  visibility: ${props => (props.scrolled ? 'visible;' : 'hidden;')};
  

  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: space-around;
  text-align: center;

  height: 6rem;
  width: 8rem;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Inter';

  cursor: pointer;
  color: ${Colors.DARKEST};

  background-color: ${props => (props.scrolled ? `${Colors.WHITE};` : 'transparent')};
  animation: ${props => (props.scrolled ? 'fadein' : 'fadeout')} 0.2s;
  border-radius: 3rem;
  border: 1px solid ${Colors.PINK};

`;

export default Print;