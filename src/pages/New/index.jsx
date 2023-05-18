import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './style';
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" icon={FiArrowLeft} />
            <h1>Novo filme</h1>
          </header>

          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />

        </Form>
      </main>



    </Container>
  );
}