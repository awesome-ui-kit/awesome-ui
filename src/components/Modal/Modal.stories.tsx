import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button';

export default {
  title: 'Components/Page elements/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryModal = Template.bind({});
PrimaryModal.args = {
  title: 'Modal Window',
  onClose: () => console.log('close'),
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
      <div style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
        <Button>Okay</Button>
        <Button view="secondary">Cancel</Button>
      </div>
    </>
  ),
};

export const SuccessModal = Template.bind({});
SuccessModal.args = {
  title: 'Modal Window',
  onClose: () => console.log('close'),
  color: 'success',
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
      <div style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
        <Button color="success">Okay</Button>
        <Button color="success" view="secondary">
          Cancel
        </Button>
      </div>
    </>
  ),
};

export const DangerModal = Template.bind({});
DangerModal.args = {
  title: 'Modal Window',
  onClose: () => console.log('close'),
  color: 'danger',
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
      <div style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
        <Button color="danger">Okay</Button>
        <Button color="danger" view="secondary">
          Cancel
        </Button>
      </div>
    </>
  ),
};

export const WarningModal = Template.bind({});
WarningModal.args = {
  title: 'Modal Window',
  onClose: () => console.log('close'),
  color: 'warning',
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
      <div style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
        <Button color="warning">Okay</Button>
        <Button color="warning" view="secondary">
          Cancel
        </Button>
      </div>
    </>
  ),
};

export const InfoModal = Template.bind({});
InfoModal.args = {
  title: 'Modal Window',
  onClose: () => console.log('close'),
  color: 'info',
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
      <div style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
        <Button color="info">Okay</Button>
        <Button color="info" view="secondary">
          Cancel
        </Button>
      </div>
    </>
  ),
};
