const customerMessages = {
  'loadshedding ngoku': 'get loadshedding information for now',
  'loadshedding namhlanje': 'get loadshedding info for today',
  'loadshedding ngomso': 'get loadshedding information for tomorrow',
  'loadshedding kuleveki': 'get loadshedding information for the next 7 days',
};

const appResponse = (customerRequest) => {
  return customerRequest;
};

module.exports = { appResponse };
