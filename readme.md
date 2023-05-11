# Sample code for StackOverflow question

Details of the question can be found [here](https://stackoverflow.com/questions/76228688/testing-if-one-method-is-being-called-by-another-using-jest)

### The problem

Jest cannot spy on nested method calls despite calling the parent method and spying on the called method.

### How to see the problem

1. Clone the repo

  ```bash
  git clone git@github.com:verebes1/tests-jest.git
  ```

2. Install all the dependencies

  ```bash
  cd tests-jest
  npm install
  ```

3. Run the tests

  ```bash
  npm run test
  ```

All steps in one block for convenience.

```bash
git clone git@github.com:verebes1/tests-jest.git
cd tests-jest
npm install
npm run test
```