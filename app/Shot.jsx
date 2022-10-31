'use client';

import clsx from 'clsx';
import _ from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { INSULTOS, NUMERO_INSULTOS } from '../config';
import haddockTemplate from '../public/pictures/haddock_template_landscape.jpg';

const getInsultos = () => _.sampleSize(INSULTOS, NUMERO_INSULTOS);

const Shot = ({ className }) => {
  const [insultos, setInsultos] = useState([]);
  useEffect(() => {
    setInsultos(getInsultos());
  }, []);

  return (
    <main className={clsx(className, 'container')}>
      <Image
        src={haddockTemplate}
        className="imageTemplate"
        alt="Haddock insulta"
      />
      <p className="haddockText">
        {insultos.map(insulto => `¡${insulto}!...`).join(' ')}
      </p>
      <p
        className="tintinText"
        role="button"
        onClick={() => setInsultos(getInsultos)}
      >
        ¿Todavía no ha terminado, capitán?
      </p>
    </main>
  );
};

export default Shot;
