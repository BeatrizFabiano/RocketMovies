import { Container, Profile, Logo } from "./style";
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <Logo>
        RocketMovies
      </Logo>

      <Input type="text" placeholder="Pesquisar por título" />

      <Profile to="/profile">
        <div>
          <strong>Beatriz Fabiano</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/beatrizfabiano.png" alt="Imagem de perfil do usuário" />
      </Profile>
    </Container>
  );
}  