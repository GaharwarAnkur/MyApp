import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const MyImagePicker = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setImageUri(response.uri);
      }
    });
  };

  return (
    <View>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default MyImagePicker;
