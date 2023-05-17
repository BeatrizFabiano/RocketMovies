import { FiPlus } from 'react-icons/fi';
import { Container, Content, NewNote, Top } from './style'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie'

export function Home() {
  return (
    <Container>
      <Header />

      <Top>
        <h1>Meus filmes</h1>

        <NewNote>
          <FiPlus />
          Adicionar Filme
        </NewNote>
      </Top>


      <Content>
        <Section>
          <Movie data={{
            title: 'Interestellar ',
            tags: [
              { id: '1', name: 'Ficção científica' },
              { id: '2', name: 'Ação' }
            ]
          }}
          />

        </Section>
      </Content>
    </Container>
  )
}