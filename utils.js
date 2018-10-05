module.exports = {
  lineIndent: 4,
  noConsole: {
    prod: ['warn', {
      allow: ['assert', 'error', 'time', 'timeEnd']
    }],
    dev: ['off'],
    get value(){
      return process.env.NODE_ENV === 'production' ? this.prod : this.dev;
    }
  },
  noDebugger: {
    prod: ['error'],
    dev: ['off'],
    get value(){
      return process.env.NODE_ENV === 'production' ? this.prod : this.dev;
    }
  }
};
