import { Container, Form, Background } from './style';
import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function Signup() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assiste</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
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

        <Button title="Cadastrar" />

        <a href="#">
          <FiArrowLeft /> Voltar para o login
        </a>

      </Form>


      <Background />
    </Container>
  )
}

