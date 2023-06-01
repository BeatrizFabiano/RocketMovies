import { Container, Form, Background } from './style';
import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../../components/Button';

export function Signin() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assiste</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="passsword"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <a href="#">
          Criar conta
        </a>

      </Form>

      <Background />
    </Container>
  )
}

