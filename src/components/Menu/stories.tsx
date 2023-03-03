import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
      <Menu {...args} />
      <br />
      Nam inventore corrupti et aperiam numquam. Lorem ipsum dolor sit amet. Ab
      aliquid delenitiQui nostrum ea quaerat omnis quo molestiae dolorum sit
      eaque quidem. Sed nisi reiciendis et impedit essesed nesciunt qui repellat
      voluptatum. Aut delectus consequatur et nesciunt voluptatum. Ab nisi
      suntAut itaque et voluptatem dolorum hic deserunt autem. Ex repellat
      autemEt atque ut quia neque et quia soluta. Sed vitae tenetur non
      voluptatibus odit. Ea officia impedit Eum accusantium eum quaerat ratione
      non odit galisum. Est repellendus aspernatur Rem voluptas rem quia
      architecto a facere voluptatem.
    </div>
  );
};
