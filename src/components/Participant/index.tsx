import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {
  technology: string;
  onRemove: () => void;
};

export function Participant({ technology, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{technology}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
