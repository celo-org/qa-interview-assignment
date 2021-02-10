# QA'ing an Instagram Clone

QA is an important part of the mobile development process at cLabs and we believe the best way to know if you'll be a good fit is to see some of your work first hand. As part of the QA Engineer interview process, candidates are asked to showcase their ability in both manual and automated testing.

This repo is home to an Instagram clone, which is largely based off the work done by [Pavel Foujeu](https://twitter.com/Pavel_FFP) in [this public repo](https://github.com/Doha26/Instagram-clone). We ask that candidates follow the steps to launch the app in an iOS simulator then preform manual testing and automated testing (using the Detox framework).

This takehome excerise is meant to take no more than 3 hours and is the most important part of the QA Engineer interview process. Upon successful completion of this takehome, you will be invited to a set of final round interviews in which you will be asked to explain the thought process behind the work you submitted. If you have any issues following the below instructures for getting the app running, please do not hestitate to reach out to your Recruiting Partner. This exercise is meant to showcase your QA skills and nothing more!

## Getting Setup

The below steps will walk you through getting the Instagram clone running on an iOS simulator on your computer. If you have any issues following these steps to getting a simulator running, please reach out to your Recruiting Partner.

### Packages and Programs to Install

#### Install Node

Install `nvm` (allows you to manage multiple versions of Node) by following the instructions here: [https://github.com/nvm-sh/nvm].

Once `nvm` is successfully installed, restart the terminal and run the following commands to install the `npm` versions that [celo-monorepo] will need:

```bash
# restart the terminal after installing nvm
nvm install 8
nvm install 10
nvm alias default 10
```

#### Install Yarn

Install it using the below command:

```
npm install -g yarn
```

#### Install Xcode

[Install Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12). This is a large program and may take a bit of time if you don't already have it.

Xcode is needed to build and deploy the app. If you do not have an iOS device, Xcode can be used to emulate one.

#### Install Xcode CLI

Install the Xcode command line tools:

```bash
xcode-select --install
```

#### Install Cocopods

```bash
gem install cocoapods
```

If your machine does not recognize the `gem` command, you may need to [download Ruby](https://www.ruby-lang.org/en/documentation/installation/) first.

#### Install Apple Sim Utils

```
brew tap wix/brew
brew install wix/brew/applesimutils
```

### Running the App

Open your terminal and navigate to where you'd like this repo to be downloaded. You can clone the repo by typing the following into the command line:

```
git clone https://github.com/celo-org/qa-interview-assignment.git
```

Navigate into the directory and install the necessary dependencies by entering the following into the command line:

```
cd qa-interview-assignment
yarn run setup
```

Run the simulator using the below command. This should open a new terminal window with the app bundler as well as a new window with an iOS simulator. The app should take about 2 mins to boot up.

```
yarn run ios
```

You should be all set with an Instagram clone running on an iOS simulator. If you've had any issues completing the setup process, please get in touch with your Recruiting Partner before continuing.

## Tasks

### Manual QA

- Make note of any bugs or quality shortcomings in the **Home portion** of the Instagram clone. _Do not navigate to or test any other portions of the app (i.e., Camera, TV, DMs, Search, Post, Activitv, or Profile)_. The app is too large to fully QA...please stick to the Stories and Activity Feed in the Home portion!
- Please organize this feedback as if you were communicating with an engineer that has asked for your help in QA'ing a new feature. In the final round of the interview process, this is what you will be asked to do! Feel free to use any program you'd like to take notes as long as it's easily shareable (e.g., Google Docs, Google Sheets, PDF, bullet points on an email).

### Automated QA

- Write 5-8 tests using the [Detox framework](https://github.com/wix/Detox), which has already been configured to run in this app. Again, **test only the home portion** of the app. You can test whatever you'd like - a mix of tests that are designed to pass (i.e., the test confirms that the feature works as expected) and designed to fail (i.e., the test highlights that a feature is broken) would be ideal. Please note, you will likely need to add `testID`s to elements you'd like to interact with through your Detox tests.
- Write all tests in `e2e/tests/app.spec.ts`. You will find one example test written there to get you started.
- The test suite is programmed to run if you type `yarn test` in the root directory of this repo. You must have the app running in the simulator (i.e., run `yarn run ios` before running `yarn test`) for the tests to run correctly. After running `yarn test` you will see if your tests are passing or failing. If the example test we've included is not passing, please let us know as there is likely an issue we need to resolve on our end.

### Submission

Upon completion, please email your Recruiting Partner with an email titled _[Your last name] - cLabs QA Engineer Takehome_ and the following attachments:

- A digital copy to your manual testing notes or a link where we can access it (please make sure it's publicly accesible)
- The `app.spec.ts` file you have written your Detox tests in
