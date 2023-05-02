import Navigation from '@/components/Navigation';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {} satisfies Meta<typeof Navigation>;
