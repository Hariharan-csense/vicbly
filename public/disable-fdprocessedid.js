// Prevent fdprocessedid attributes from being added to form elements
Object.defineProperty(HTMLFormElement.prototype, 'fdprocessedid', {
  set: function() {},
  get: function() { return undefined; },
  configurable: true
});

// Also handle input elements
Object.defineProperty(HTMLInputElement.prototype, 'fdprocessedid', {
  set: function() {},
  get: function() { return undefined; },
  configurable: true
});

// Handle button elements
Object.defineProperty(HTMLButtonElement.prototype, 'fdprocessedid', {
  set: function() {},
  get: function() { return undefined; },
  configurable: true
});

// Handle select elements
Object.defineProperty(HTMLSelectElement.prototype, 'fdprocessedid', {
  set: function() {},
  get: function() { return undefined; },
  configurable: true
});

// Handle textarea elements
Object.defineProperty(HTMLTextAreaElement.prototype, 'fdprocessedid', {
  set: function() {},
  get: function() { return undefined; },
  configurable: true
});
