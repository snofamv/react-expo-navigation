import { Pressable, Text } from "react-native";
import { globalStyles } from "../../theme/theme";

interface PropsComponent {
  onPress: () => void;
  label: string;
  styleButton?: any;
  styleLabel?: any;
}
export const ButtonComponent = ({
  onPress,
  label = "Example text",
  styleButton = globalStyles.primaryButton,
  styleLabel = globalStyles.buttonText,
}: PropsComponent) => {
  return (
    <Pressable style={styleButton} onPress={() => onPress()}>
      <Text style={styleLabel}>{label}</Text>
    </Pressable>
  );
};
