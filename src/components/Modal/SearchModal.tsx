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

  import ProceedButton from '../ProceedButton'
  
  //var Lorem = require('react-lorem-component');
  
  export default function URLModal() {
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
            SEARCH VIDEO
          </Button>
    
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Connect to Youtube Data</ModalHeader>
              <ModalCloseButton />
                
    
              <ModalFooter>
                <ProceedButton />
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    }
