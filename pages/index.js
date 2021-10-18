import React from 'react';

import Button from 'choom/lib/components/button/Button';
import Heading from 'choom/lib/components/heading/Heading';
import Hold from 'choom/lib/components/layout/Hold';
import Space from 'choom/lib/components/space/Space';

export default function Intro () {

  const testApiCall = () => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then(data => console.log(data));
  }

  return (
    <div>
        <Heading level='2' as='h1' colorInherit>Your honest game</Heading>

        <Space size='2'/>

        <Hold>
          <Button onClick={testApiCall}>Call</Button>
        </Hold>
    </div>
  )
}
