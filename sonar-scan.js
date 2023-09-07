scanner(
    {
      serverUrl : 'http://localhost:9000',
      token : "sqa_e73f1768c026acf9df1e156a07e89c0185bc6789",
      options: {
        'sonar.projectName': 'javascript-demo',
        'sonar.projectDescription': '',
        'sonar.sources': 'src',
        'sonar.tests': 'tests'
      }
    },
    () => process.exit()
  )