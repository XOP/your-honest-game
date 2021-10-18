import Link from 'next/link';

import Flow from 'choom/lib/components/layout/Flow';

const Navigation = () => {
  return (
    <Flow as='nav' space='2'>
      <Link href='/'>Intro</Link>
      <Link href='/game'>Game</Link>
      <Link href='/settings'>Settings</Link>
    </Flow>
  );
};

export { Navigation };
