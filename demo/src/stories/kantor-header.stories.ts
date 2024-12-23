import "@components/kantor-header";
import { KantorHeader } from "@components/kantor-header";
import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { createHTMLFragment } from "../utils/create-html-fragment";

type ComponentProps = {
  "left-slot": string;
  "right-slot": string;
} & KantorHeader;

const meta = {
  title: "Components/Kantor Header",
  component: "kantor-header",
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text", // Generates a text input control in Storybook
      description: "CSS class applied to the header element",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    "left-slot": {
      control: "text", // Slot-specific control
      description: "Content for the 'left' slot",
      table: {
        category: "Slots",
        type: { summary: "HTMLElement" },
        defaultValue: { summary: "null" },
      },
    },
    "right-slot": {
      control: "text", // Slot-specific control
      description: "Content for the 'right' slot",
      table: {
        category: "Slots",
        type: { summary: "HTMLElement" },
        defaultValue: { summary: "null" },
      },
    },
  },
} satisfies Meta<ComponentProps>;

export default meta;

type Story = StoryObj<ComponentProps>;

export const Default: Story = {
  args: {
    className: "custom-header",
    "left-slot": "<p slot='left'>adsa</p>",
    "right-slot": "<p slot='right'>dsajdsalkdsajlkdas<p>",
  },
  render: (args) => {
    const base = html` <kantor-header class=${args.className}>
      ${createHTMLFragment(args["left-slot"])}
      ${createHTMLFragment(args["right-slot"])}
    </kantor-header>`;
    return base;
  },
};
