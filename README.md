# Expo ImagePicker Android Camera Roll Loading Issue

This repository demonstrates a bug encountered when using the Expo ImagePicker library on Android. The camera roll fails to load images, although the picker interface appears correctly.  The issue appears to be related to specific options passed to `ImagePicker.showImagePickerAsync()`. This repo provides the buggy code and a potential solution.

## Steps to Reproduce

1. Clone this repository.
2. Run the `bug.js` example using Expo Go (or a similar Expo development environment) on an Android device.
3. Observe that the ImagePicker loads, but the camera roll is empty or does not display images.

## Potential Solution

The `bugSolution.js` file contains a possible workaround.  It involves adjusting the options passed to `ImagePicker.showImagePickerAsync()`, specifically focusing on options that may conflict with media loading.  See the file for detailed changes.