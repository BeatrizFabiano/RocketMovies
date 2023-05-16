import { Container } from './style';

export function MovieTitle({ icon: Icon, title, ...rest }) {
  return (
    <Container>
      <h1>Interestellar</h1>
      <button>
        {Icon && <Icon size={25} />}
      </button>
      <button>
        {Icon && <Icon size={25} />}
      </button>
      <button>
        {Icon && <Icon size={25} />}
      </button>
      <button>
        {Icon && <Icon size={25} />}
      </button>
      <button>
        {Icon && <Icon size={25} />}
      </button>
    </Container>
  );
}
