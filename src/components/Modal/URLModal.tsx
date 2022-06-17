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
  
  import URLBar from '../URLBar'
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
            SEND VIDEO URL
          </Button>
    
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Paste your video URL here</ModalHeader>
              <ModalCloseButton />
                <URLBar />
    
              <ModalFooter>
                {/* <Button variantColor="blue" mr={3}>
                  Enter
                </Button> */}
                <ProceedButton />
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    }