import '@testing-library/jest-dom/extend-expect'; 

// Configure JSDOM and set global variables
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

Object.defineProperty(document, 'querySelector', {
  value: () => document,
});

Object.defineProperty(document, 'querySelectorAll', {
  value: () => document,
});
