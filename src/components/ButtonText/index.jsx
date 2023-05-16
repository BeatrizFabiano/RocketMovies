import { Container } from './style';

export function ButtonText({ icon: Icon, title, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
      {Icon && <Icon size={20} />}
    </Container>
  )
}