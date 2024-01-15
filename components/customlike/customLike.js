import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const LikeDislikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLikePress = () => {
    setLikes(likes + 1);
  };

  const handleDislikePress = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button
        type="clear"
        icon={<Icon name="thumbs-up" type="font-awesome" color="blue" />}
        title={`Like (${likes})`}
        onPress={handleLikePress}
      />
      <Button
        type="clear"
        icon={<Icon name="thumbs-down" type="font-awesome" color="red" />}
        title={`Dislike (${dislikes})`}
        onPress={handleDislikePress}
      />
    </View>
  );
};

export default LikeDislikeButton;
