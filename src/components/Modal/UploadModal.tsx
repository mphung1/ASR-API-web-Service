import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue
} from "@chakra-ui/react";

import NextLink from 'next/link'
import UploadButton from '../UploadButton'
import ProceedButton from '../ProceedButton'

var Lorem = require('react-lorem-component');

export default function UploadModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button 
          onClick={onOpen}
          width='200px'
          border='2px'
          borderColor='whiteAlpha'
          type="button"
          colorScheme="gray"
          //colorScheme={useColorModeValue('blue', 'orange')}
        >
          UPLOAD VIDEO
        </Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <UploadButton />
  
            <ModalFooter>
                <ProceedButton />
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }