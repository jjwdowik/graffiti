Getting Started
If you're only developing for one platform you can ignore the steps below that are tagged with the platform you don't require.

1) Clone & Install Dependencies
1.1) Clone Project
1.2) Install NPM packages with your package manager of choice - i.e run yarn or npm install
1.3) [iOS] cd ios and run pod install - if you don't have CocoaPods you can follow these instructions to install it.
1.4) [Android] No additional steps for android here.
2) Start app
4.1) Start the react native packager, run yarn run start or npm start from the root of your project.
4.2) [iOS] Build and run the iOS app, run npm run ios or yarn run ios from the root of your project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
4.3) [Android] If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run npm run android or yarn run android from the root of your project.
