# Awesome UI

This is a simple ui-framework, which will allow you to create an awesome web-applications with already prepared and thought out to the smallest detail components. Go to <a href="https://awesome-ui-kit.github.io/awesome-ui/?path=/story/documentation-introduction--page" target="_blank">documentation</a>

<h2>Installation</h2>

<code>npm install @awesome-ui-kit/awesome-ui</code>

<h2>Usage</h2>

<h3>Button</h3>

```javascript
import React from 'react';
import { Button } from '@awesome-ui-kit/awesome-ui';

function App() {
  return <Button color="success">Button</Button>;
}
```

<h3>Input</h3>

```javascript
import React from 'react';
import { Label, Input } from '@awesome-ui-kit/awesome-ui';

function App() {
  return (
    <>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your name" fieldType="text" />
    </>
  );
}
```

<h3>Accordion</h3>

```javascript
import React from 'react';
import { Accordion } from '@awesome-ui-kit/awesome-ui';

function App() {
  return (
    <Accordion title="Title">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Accordion>
  );
}
```

<h3>Notification</h3>

```javascript
import React, { useState } from 'react';
import { Notification, Button } from '@awesome-ui-kit/awesome-ui';

function App() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <Button onClick={() => setShowNotification(true)}>Show</Button>
      {showNotification && (
        <Notification title="Title" onClose={() => setShowNotification(false)}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Notification>
      )}
    </>
  );
}
```
