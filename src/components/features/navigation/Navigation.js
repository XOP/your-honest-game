import Link from 'next/link';

import Flow from 'choom/lib/components/layout/Flow';

import { routes } from '../../../routes';

const Navigation = () => {
  return (
    <Flow as='nav' space='2'>
      <Link href={routes.MAIN}>Intro</Link>
      <Link href={routes.GAME}>Game</Link>
      <Link href={routes.SETTINGS}>Settings</Link>
    </Flow>
  );
};

export { Navigation };
