import React from "react"; 

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //First Test
    //First argument, a string declares what is being tested
    //second argument is a callback function to run the test
    //test can be used interchangeably with 'it' to create a test
    it('renders', () => {
        render(<About />);
    });
    //Second Test
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})