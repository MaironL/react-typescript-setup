import {
  MainHeader,
  MenuDetails,
  Plate,
  PlateDetails,
  PlateDetailsModal,
} from 'infrastructure/componentes';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import S from './home.module.scss';

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={`container-fluid px-0  ${S.mainCont}`}>
      <div className={`bg-secondary shadow  ${S.headerCont}`}>
        <MainHeader size='fs-1' content='Primer menu' />
      </div>

      <section
        className={`container d-none d-lg-block bg-white rounded m-2 shadow mh-50 ${S.plateDetails}`}
      >
        <PlateDetails />
      </section>
      <section
        className={`position-relative d-flex flex-wrap align-items-start justify-content-center py-5 py-lg-3 m-2 overflow-auto bg-white rounded m-2 shadow ${S.platesList}`}
      >
        <Plate img={'asdasd'} title={'El titulo'} time={'126'} score={'34'} canClose />
        <Plate img={'asdasd'} title={'El titulo'} time={'126'} score={'34'} canClose />
        <Plate img={'asdasd'} title={'El titulo'} time={'126'} score={'34'} canClose />
        <Plate img={'asdasd'} title={'El titulo'} time={'126'} score={'34'} canClose />
      </section>
      <section
        className={`d-flex justify-content-center align-items-center my-2 ${S.addPlate}`}
      >
        <Link to='PlateSearch'>
          <Button className='rounded-pill shadow' variant='warning'>
            Agregar Plato
          </Button>
        </Link>
      </section>
      <section className={`bg-white rounded m-2 shadow ${S.menuDetails}`}>
        <MenuDetails />
      </section>
      <PlateDetailsModal show={show} setShow={setShow} />
    </main>
  );
};

export default Home;
