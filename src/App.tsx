import { Container } from './components/container';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/logo';
import { Menu } from './components/menu';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              labelText='Task:'
              type='text'
              placeholder='Digite algo'
              defaultValue={'Valor preenchido'}
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
