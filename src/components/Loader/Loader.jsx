import { Triangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Triangle
        height="100"
        width="100"
        color="tomato"
        ariaLabel="loading"
      />
    </Container>
  );
};

export default Loader;