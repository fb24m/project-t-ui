import { Meta, StoryObj, storiesOf } from '@storybook/react'
import { Popup } from './Popup.component'

import { CodeOrSourceMdx } from '@storybook/addon-docs'

const meta: Meta<typeof Popup> = {
	title: 'Popup',
	component: () => {
		return (
			<div>
				hello
			</div>
		)
	},

	parameters: {
		docs: {
			components: {
				code: 'hello'
			},
			description: {
				story: 'description'
			}
		}
	},

}


export default meta

type Story = StoryObj<typeof Popup>

export const Docs: Story = {
	args: {

	},
	argTypes: {

	}
}