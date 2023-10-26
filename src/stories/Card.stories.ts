import Card from '../components/card/Card'; // Asegúrate de proporcionar la ruta correcta a tu componente
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Sample Repository',
  url: 'https://github.com/sample',
};

