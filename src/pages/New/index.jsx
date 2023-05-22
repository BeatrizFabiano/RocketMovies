import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Data } from './style';
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Section>
            <header>
              <ButtonText title="Voltar" icon={FiArrowLeft} />
              <h1>Novo filme</h1>
            </header>
            <Data>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </Data>

            <Textarea placeholder="Observações" />

            <Section title="Marcadores">
              <div className='tags'>
                <MovieItem value="ação" />
                <MovieItem isNew placeholder="Novo marcador" />
              </div>
            </Section>

            <Data>
              <Button title="Excluir filme" />
              <Button title="Salvar alterações" />
            </Data>
          </Section>


        </Form>
      </main>



    </Container>
  );
}