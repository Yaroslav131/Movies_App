import React from 'react';
import { Container, ModalWrapper } from './styles';

interface ModalContainerProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

function ModalContainer({
  isModalVisible,
  toggleModal,
  children,
}: ModalContainerProps) {
  return (
    <Container>
      <ModalWrapper
        isVisible={isModalVisible}
        backdropOpacity={0.7}
        backdropColor="#1E1F27"
        onBackdropPress={toggleModal}
        avoidKeyboard
        useNativeDriver
      >
        {children}
      </ModalWrapper>
    </Container>
  );
}

export default ModalContainer;
