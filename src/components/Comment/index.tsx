import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getUserById } from '@/api/firebase/authFirebase';
import { FilmCommentsType, Theme, UserType } from '@/types';
import { styles } from './styles';
import { timeAgo } from '@/helpingFunctions';
import UserAvatar from '../UserAvatar';

interface CommentProps {
    item: FilmCommentsType
    theme: Theme
}

function Comment(props: CommentProps) {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  useEffect(() => {
    getUserById(props.item.userid)
      .then((user) => {
        setCurrentUser(user);
      });
  }, [props.item.userid]);

  return (
    <View style={styles.commemtContainer}>
      <UserAvatar
        firstName={currentUser?.firstName}
        lastName={currentUser?.lastName}
      />
      <View style={styles.rigthContainer}>
        <View style={styles.topContainer}>
          <Text style={[styles.nameText,
            { color: props.theme.detailScreen.color }]}
          >
            {`${currentUser?.firstName} ${currentUser?.lastName}`}
          </Text>
          <Text style={[styles.timeText,
            { color: props.theme.detailScreen.color }]}
          >
            {timeAgo(props.item.date)}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={[styles.commentText,
            { color: props.theme.detailScreen.color }]}
          >
            {props.item.comment}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Comment;
