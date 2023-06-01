import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft} />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/BeatrizFabiano.png"
            alt="Foto do usuário"
          />

          <label htmlFor="Avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

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
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />

      </Form>

    </Container>
  );
}