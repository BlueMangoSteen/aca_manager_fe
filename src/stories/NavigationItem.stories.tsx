import NavigationItem from '@/components/Navigation/NavigationItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Navigation/Item',
  component: NavigationItem,
} satisfies Meta<typeof NavigationItem>;

export default meta;

type Story = StoryObj<typeof NavigationItem>;

export const Default: Story = {
  args: {
    href: '#',
    active: true,
    text: '스토리북',
  },
} satisfies Meta<typeof NavigationItem>;
