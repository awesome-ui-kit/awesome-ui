# awesome-ui

This is a simple ui-framework, which will allow you to create an awesome web-applications with already prepared and thought out to the smallest detail components.

<h2>Installation</h2>

<code>npm install @awesome-ui-kit/awesome-ui</code>

<h2>Usage</h2>

<h3>Button</h3>

```javascript
    import React from 'react'; 
    import { Button } from '@awesome-ui-kit/awesome-ui'

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
                <Label htmlForm="name">Name</Label>
                <Input id="name" placeholder="Your name" fieldType="text"/>
              </>
            );
    }
```

<h3>Input</h3>

```javascript
    import React from 'react'; 
    import { Accordion } from '@awesome-ui-kit/awesome-ui';

    function App() {
      return (
              <Accordion title="Title">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </Accordion>
            );
    }
```