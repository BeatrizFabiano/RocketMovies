import { Container } from "./style";

// PARA QUE EU NÃO PRECISE ESCREVER MILHOES DE PROPRIEDADES PARA O BOTÃO OU OUTRO COMPONENTE EXISTE
// O REST OPERATOR "...rest" QUE AUTOMATIZA A INSERÇÃO DE PROPRIEDADES SETADAS NO ARQUIVO DE APLICAÇÃO DO COMPONEMTE ESPECIFICADO
//QUE NÃO ESTÃO SETADAS NA FUNÇÃO, NÃO ESTÃO EXPLICITAS COMO TITLE OU LOADING
//"loading = false" se essa propridade não foi passada pra ngm o padrão é false (boa prática)
export function Button({ title, loading = false, ...rest }) {
  // export function Button(props) {
  return (
    <Container type="button" disabled={loading} {...rest}  > {/* se loading for verdadeiro o botão fica desabilitado */}
      {loading ? 'Carregando...' : title}
      {/* {props.title} outro jeito de fazer */}
    </Container>
  );
}