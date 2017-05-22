import React from 'react';
import { shallow, mount } from 'enzyme';
import Acrylic from '../../src/acrylic/index';
import { expect } from 'chai';
import sinon from 'sinon';
const { describe, it } = global;

describe('Acrylic', () => {
	it('should show the given text', () => {
		const text = 'The Text';
		const wrapper = shallow(<Acrylic>{text}</Acrylic>);
		expect(wrapper.text()).to.be.equal(text);
	});

	it('should handle the click event', () => {
		const clickMe = sinon.stub();
		// Here we do a JSDOM render. So, that's why we need to
		// wrap this with a div.
		const wrapper = mount(
			<div>
				<Acrylic onClick={ clickMe }>ClickMe</Acrylic>
			</div>
		);

		wrapper.find('button').simulate('click');
		expect(clickMe.callCount).to.be.equal(1);
	});
});
