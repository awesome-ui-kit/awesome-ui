import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Notification from './Notification';

export default {
  title: 'Components/Page elements/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const InfoNotification = Template.bind({});
InfoNotification.args = {
  color: 'info',
  title: 'Info notification',
  onClose: () => console.log('close'),
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
    </>
  ),
};

export const SuccessNotification = Template.bind({});
SuccessNotification.args = {
  color: 'success',
  title: 'Success notification',
  onClose: () => console.log('close'),
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
    </>
  ),
};

export const DangerNotification = Template.bind({});
DangerNotification.args = {
  color: 'danger',
  title: 'Danger notification',
  onClose: () => console.log('close'),
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
    </>
  ),
};

export const WarningNotification = Template.bind({});
WarningNotification.args = {
  color: 'warning',
  title: 'Warning notification',
  onClose: () => console.log('close'),
  children: (
    <>
      <p>
        Sagittis neque aliquam pellentesque ornare vulputate mauris bibendum non
        maecenas. Cursus vestibulum nec libero sit ultrices nibh a. Orci
        pulvinar nullam auctor in dolor congue amet in quis. Nec amet tristique
        tristique vestibulum senectus.
      </p>
    </>
  ),
};
