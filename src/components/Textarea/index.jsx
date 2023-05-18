import { Container } from "./style";

export function Textarea({ value, ...rest }) {
  return (
    <Container>
      {value}
    </Container>
  );
}