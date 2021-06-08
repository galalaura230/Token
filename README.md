# Newton Finance Token

## Introduction
Welcome to Newton Finance Token

[![Newton Finance Token](https://user-images.githubusercontent.com/57055334/121074307-06decd80-c817-11eb-9b1c-282228e698ef.png)](https://www.youtube.com/watch?v=84j9PPFbt4s "Newton Finance Token")

Do you have what it takes?
Visit [Official site](https://www.newtonfinancetoken.com/) to find out.

## How to start?

This project utilizes [Truffle Suite](https://www.trufflesuite.com/) to automate testing.

You will need to install [Truffle](https://www.trufflesuite.com/truffle):

```
npm install truffle -g
```

and [Ganache CLI](https://github.com/trufflesuite/ganache-cli):

```
npm install -g ganache-cli
```

Once installed, run Ganache CLI in a terminal:

```
My-Comp:~ johndoe$ ganache-cli
```

Then, from the root of this project, run the tests:

```
truffle test
```

## Newton Finance Token Testing

You can test contract by forking mainnet into local.
You will need to copy `start.sh.example` to `start.sh` in root directory.
And please add your infura id and mnemonic.

Then, from the root of this project, run the tests:

```
sh ./start.sh
```

```
truffle test
```
or

```
truffle test ./test/erc20.test.js
```
