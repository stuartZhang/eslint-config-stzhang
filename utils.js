module.exports = {
  lineIndent: 4,
  noConsole: {
    value: ['warn', {
      allow: ['assert', 'dir', 'dirxml', 'profile', 'profileEnd']
    }]
  },
  noDebugger: {
    prod: ['error'],
    dev: ['off'],
    get value(){
      return process.env.NODE_ENV === 'production' ? this.prod : this.dev;
    }
  }
};
