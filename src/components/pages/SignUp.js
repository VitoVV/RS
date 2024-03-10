import React, { useEffect}  from "react";
import '../../App.css';
import {
    Heading,
    VStack,
    InputGroup,
    InputLeftAddon,
    Input,
     Button,
     Textarea,
     Select,
     NumberInput,
     NumberInputField,
     NumberInputStepper,
     NumberIncrementStepper,
     NumberDecrementStepper,
     FormControl,
     FormErrorMessage,
     } from "@chakra-ui/react";
     import * as Yup from 'yup';
     import { useFormik } from "formik";
     import useSubmit from "./useSubmit";
     import {useAlertContext} from "./alertContext";

export function SignUp(){
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {firstName:'',lastName:'',email:'',number:'',type:'title',comment:''},
        onSubmit : (values) =>  {
          submit('', values);},
        validationSchema: Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          number: Yup.number().required("Required"),
          email: Yup.string().email('Required Email').required("Required"),
          comment: Yup.string().required("Required").min(25, "Must be at least 25 characters")
        }),
      });

      useEffect(() => {
        if (response) {
          onOpen(response.type, response.message);
          if (response.type === "success")
            formik.resetForm();
        }
      }, [response]);
    
      const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
        return (
          <VStack
          bgImage="url('/images/dining.jpg')"
        backgroundColor={boxProps.backgroundColor}
        color={isDarkBackground ? "white" : "black"}
          >
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
              {children}

            </VStack>
          </VStack>
        );
      };

    return  (   
    <FullScreenSection
          p={100}
          bg= {'#495E57'}
          fontSize={26}
          
    >
        <form  onSubmit={formik.handleSubmit}>
        <Heading as="h1">Please enter information</Heading>

         <VStack spacing={8}>
         <FormControl>
                <InputGroup>
                <InputLeftAddon htmlFor="type"> Title : </InputLeftAddon>
                <Select placeholder='title' id="type" name="type" {...formik.getFieldProps("type")}>
                    <option value='option1'>Mr.</option>
                    <option value='option2'>Mrs.</option>
                    <option value='option3'>Other</option>
                    </Select>
                </InputGroup>
        </FormControl>

        <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
            <InputGroup>
                <InputLeftAddon htmlFor="firstName" > First Name : </InputLeftAddon>
                <Input 
                 placeholder=' First name'  
                 id="firstName"
                name="firstName"
                {...formik.getFieldProps("firstName")}/>
            </InputGroup>
            <FormErrorMessage> {formik.errors.firstName} </FormErrorMessage>
         </FormControl>

         <FormControl isInvalid={!!formik.errors.lastName && formik.touched.lastName}>
            <InputGroup>
                <InputLeftAddon htmlFor="lastName" > Last Name : </InputLeftAddon>
                <Input 
                placeholder=' Last name'
                id="lastName"
                name="lastName"
                {...formik.getFieldProps("lastName")} />
            </InputGroup>
            <FormErrorMessage> {formik.errors.lastName} </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formik.errors.number && formik.touched.number}>
            <InputGroup>
                <InputLeftAddon htmlFor="number">  Phone number :  </InputLeftAddon>
                <Input type='tel' 
                placeholder=' phone number' 
                id="number"
                name="number"
                {...formik.getFieldProps("number")} />
            </InputGroup>
            <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formik.errors.email &&  formik.touched.email }>
            <InputGroup>
            <InputLeftAddon htmlFor="email"  >Email : </InputLeftAddon>
                <Input
                type="email"
                placeholder="test@test.com"
                
                id="email"
                name="email"
                {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </InputGroup>
            </FormControl>


            <InputGroup>
                <InputLeftAddon>
                Select Date and Time :   
                </InputLeftAddon>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        />
            </InputGroup>


            <InputGroup>
                            <InputLeftAddon>
                            Number of Diners:
                            </InputLeftAddon>
                                <NumberInput defaultValue={1} min={1} max={8} clampValueOnBlur={false}>
                                <NumberInputField />
                                <NumberInputStepper  >
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                                </NumberInput>
            </InputGroup>

            <FormControl isInvalid={!!formik.errors.comment &&  formik.touched.comment }>
            <InputGroup>
                <InputLeftAddon htmlFor="comment" >
                Extra Request :   
                </InputLeftAddon>
                <Textarea 
                size='md' 
                placeholder='comment' 
                id="comment"
                name="comment"
                height={70}
                {...formik.getFieldProps("comment")}
                />
            </InputGroup>
            </FormControl>
         
            <Button type="submit" colorScheme='yellow' width="full" isLoading={isLoading} >
                Submit
              </Button>
         </VStack>
</form>
</FullScreenSection >





    
    )
};

