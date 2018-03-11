module.exports = {
  verbose: true,
  modulePathIgnorePatterns: [
    "node_modules/",
    ".cache/",
  ],
  moduleNameMapper: {
    "^.+\\.(css|scss|jpg|jpeg|png|gif|svg)$": "identity-obj-proxy"
  },
  setupFiles: [
    "./test/shim.js",
    "./test/jestSetup.js"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
