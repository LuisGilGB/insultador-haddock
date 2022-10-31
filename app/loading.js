import clsx from 'clsx';
import Image from 'next/image';
import haddockTemplate from '../public/pictures/haddock_template_landscape.jpg';

const Loading = ({ className }) => (
  <main className={clsx(className, 'container')}>
    <p className="haddockText">...</p>
    <Image
      src={haddockTemplate}
      className="imageTemplate"
      alt="Haddock insulta"
    />
  </main>
);

export default Loading;
