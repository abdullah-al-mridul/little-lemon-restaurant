import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRef, useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { appConfig } from "../config/firebase.config";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
const loginManager = async (email, password) => {
  const auth = getAuth(appConfig);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const toast = useRef(null);

  useEffect(() => {
    const auth = getAuth(appConfig);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail });
  };
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    try {
      if (isUserLoggedIn) {
        showToast("error", "Already Logged In", "You are already logged in.");
      } else {
        await loginManager(values.email, values.password);
        // Login successful
        showToast("success", "Logged In", "You have successfully logged in.");
        navigate("/");
        // console.log(userCredential);
      }
    } catch (error) {
      // Login failed
      showToast("error", "Login Failed", error.message);
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#DFC338]">
      <Toast ref={toast} position="bottom-right" />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 py-12 mx-auto">
        <Box
          bg={"brand.100"}
          w="sm"
          p={4}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          className="login_box"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <VStack spacing={4}>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        id="email"
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel className="form-input-label">
                          Email
                        </FormLabel>
                        <Input className="form-email" type="email" {...field} />
                        <FormErrorMessage className="form-error-message">
                          {form.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        id="password"
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel className="form-input-label">
                          Password
                        </FormLabel>
                        <InputGroup>
                          <Input
                            className="form-email"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <InputRightElement width="4.5rem">
                            <Button
                              h="1.75rem"
                              size="sm"
                              className="password-toggler"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage className="form-error-message">
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    width="full"
                    isLoading={isSubmitting}
                    className="login-btn-form"
                  >
                    Login
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </section>
  );
}
