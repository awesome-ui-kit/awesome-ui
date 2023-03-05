import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
import Tag from '../Tag';
import Button from '../Button';

export default {
  title: 'Components/Page elements/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} style={{ width: 300 }} />
);

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  image: 'https://picsum.photos/id/237/300/300',
  title: 'Card Title',
  children: (
    <>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
      <div style={{ marginBottom: 15 }}>
        <Tag style={{ marginRight: 10 }} color="danger">
          lorem
        </Tag>
        <Tag style={{ marginRight: 10 }} color="info">
          purpose
        </Tag>
        <Tag style={{ marginRight: 10 }} color="success">
          content
        </Tag>
      </div>
      <Button color="info">Button</Button>
    </>
  ),
};

export const CardWithoutImage = Template.bind({});
CardWithoutImage.args = {
  title: 'Card Title',
  children: (
    <>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search
        for lorem ipsum will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
      <div style={{ marginBottom: 15 }}>
        <Tag style={{ marginRight: 10 }} color="danger">
          lorem
        </Tag>
        <Tag style={{ marginRight: 10 }} color="info">
          purpose
        </Tag>
        <Tag style={{ marginRight: 10 }} color="success">
          content
        </Tag>
      </div>
      <Button color="info">Button</Button>
    </>
  ),
};
