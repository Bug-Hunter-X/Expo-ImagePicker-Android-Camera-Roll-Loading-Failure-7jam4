The issue seems to stem from conflicting options passed to `ImagePicker.showImagePickerAsync()`.  Specifically, certain combinations of `allowsEditing`, `quality`, `maxWidth`, and `maxHeight` seem to interfere with image loading on some Android versions. 

Here's the corrected code:

```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.showImagePickerAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false, // Set allowsEditing to false
    quality: 1,
  });

  if (!result.cancelled) {
    console.log(result.uri);
  }
}
```

By simplifying the options and setting `allowsEditing` to `false` it appears the issue is resolved.   Further testing with various Android versions is recommended to ensure the fix is universally applicable.