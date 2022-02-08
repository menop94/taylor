import { TouchableOpacity } from 'react-native';
import { ButtonText } from './styled/ButtonText';
import { CreateButton } from './styled/CreateButton';

const AddButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CreateButton>
        <ButtonText>{text}</ButtonText>
      </CreateButton>
    </TouchableOpacity>
  );
};

export default AddButton;
