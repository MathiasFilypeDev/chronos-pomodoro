import { Container } from '../../components/container';
import { CountDown } from '../../components/CountDown';
import { MainTemplate } from '../../MainTemplates';
import { MainForm } from '../../templates/MainForm';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
