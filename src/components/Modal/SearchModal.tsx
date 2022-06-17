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
  import YoutubeOutput from '../Youtube/YoutubeOutput'
    
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
    
          <Modal 
            
            closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent  maxW="1000px">
              <ModalHeader>Connect to Youtube Data</ModalHeader>
              <ModalCloseButton />
                <YoutubeOutput />
    
              <ModalFooter>
                <ProceedButton />
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    }
