import styled from 'styled-components/native';
import { SpacerProps } from '../../types/spacer';

const SmallSpacer = styled.View`
  padding: 8px;
`;

const MidSpacer = styled.View`
  padding: 16px;
`;

const LargeSpacer = styled.View`
  padding: 32px;
`;

const Spacer = ({ sm, md }: SpacerProps) => {
  if (sm) {
    return <SmallSpacer />;
  }

  if (md) {
    return <MidSpacer />;
  }

  return <LargeSpacer />;
};

export default Spacer;
