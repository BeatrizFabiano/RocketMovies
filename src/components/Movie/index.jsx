import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Container } from './style';
import { Tag } from '../../components/Tag';


export function Movie({ data, ...rest }) {
  return (
    <Container>
      <h1>{data.title}</h1>

      <div className='stars'>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>

      <p>{data.text}</p>

      {
        data.tags &&

        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  );

}