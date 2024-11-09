import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface PropsComponent {
  onPress: () => void;
  label: string;
}
export const ButtonComponent = ({
  onPress,
  label = 'Example text',
}: PropsComponent) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={() => onPress()}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
