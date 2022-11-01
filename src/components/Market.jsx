
import About from './About';

import Shop from './Shop';

function Home(props) {
  const {quantityCards} = props
  return (
    <>
    <About />
    <Shop quantityCards={quantityCards} />
   </>
     
  );
}

export default Home;
