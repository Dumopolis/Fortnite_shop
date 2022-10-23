
import About from './components/About';

import Shop from './components/Shop';

function App(props) {
  const {quantity} = props
  return (
    <>
    <About />
    <Shop quantity={quantity} />
   </>
     
  );
}

export default App;
