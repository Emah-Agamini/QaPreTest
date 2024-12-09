const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// Mock instance to use in tests
global.mockAxios = new MockAdapter(axios);

// Clean mocks after each test
afterEach(() => {
  global.mockAxios.reset();
});
