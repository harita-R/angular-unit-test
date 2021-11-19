// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
 
module.exports = function (config) {
  // Lambdatest grid hostname and port
  var webdriverConfig = {
    hostname: "hub.lambdatest.com",
    port: 80,
    user: process.env.LT_USERNAME || 'YOUR_USERNAME',
    accessKey: process.env.LT_ACCESS_KEY || 'YOUR_ACCESSKEY',
  };
 
  config.set({
    basePath: "",
    // hostname: 'localhost', // hostname, where karma web server will run
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-webdriver-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {},
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/angular-unit-test"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["chrome","firefox","edge"],
    singleRun: false,
    restartOnFileChange: true,
 
    customLaunchers: {
      chrome: {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "chrome",
        platform: "windows 8.1",
        version: "71.0",
        build:'Unit Testing in Angular', //Build name
        name: "Unit test", // Test name
        pseudoActivityInterval: 5000, // 5000 ms heartbeat
      },
      firefox: {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "Firefox",
        platform: "windows 10",
        version: "91.0",
        build:'Unit Testing in Angular',
        name: "Unit test",
        pseudoActivityInterval: 5000, // 5000 ms heartbeat
      },
      edge: {
        base: "WebDriver",
        config: webdriverConfig,
        browserName: "MicrosoftEdge",
        platform: "windows 10",
        version: "93.0",
        build:'Unit Testing in Angular',
        name: "Unit test",
        pseudoActivityInterval: 5000, // 5000 ms heartbeat
      }
    },
  });
};

