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
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { Formik, Form, Field } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { appConfig } from "../config/firebase.config";
import { AuthContext } from "../App";
import { Toast } from "primereact/toast";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useRef(null);
  const [googleIconColor, setGoogleIconColor] = useState("#dfc338");

  const auth = getAuth(appConfig);

  const showToast = (message, desc, severity = "success") => {
    toast.current.show({
      severity,
      summary: message,
      detail: desc,
      life: 3000,
    });
  };

  const signUpWithEmailPassword = (email, password, setSubmitting) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(user);
        showToast(
          "Registered",
          "User created successfully. You can login now."
        );
        auth.signOut();
      })
      .catch((error) => {
        // Handle sign-up errors
        let errorMsg;
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMsg = "The email you used is already registered.";
            break;
          case "auth/invalid-email":
            errorMsg = "The email address is not valid.";
            break;
          case "auth/operation-not-allowed":
            errorMsg = "Email/password accounts are not enabled.";
            break;
          case "auth/weak-password":
            errorMsg = "The password is not strong enough.";
            break;
          default:
            errorMsg = error.message;
        }
        showToast("Failed", errorMsg, "error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleSubmit = (values, actions) => {
    if (!isUserLoggedIn) {
      signUpWithEmailPassword(
        values.email,
        values.password,
        actions.setSubmitting
      );
    } else {
      actions.setSubmitting(false);
      showToast("Error", "You are already logged in.", "error");
    }
  };
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, [auth]);
  const signInWithGoogle = () => {
    if (!isUserLoggedIn) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // Handle successful sign-in
          showToast("Logged in", "You have logged into your account");
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          // Handle sign-in errors
          let errorMsg;
          switch (error.code) {
            case "auth/account-exists-with-different-credential":
              errorMsg =
                "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.";
              break;
            case "auth/auth-domain-config-required":
              errorMsg = "Auth domain configuration is required.";
              break;
            case "auth/cancelled-popup-request":
              errorMsg = "Popup request was cancelled. Please try again.";
              break;
            case "auth/operation-not-allowed":
              errorMsg =
                "The type of account corresponding to this credential is not enabled. Please enable it in the Firebase Console.";
              break;
            case "auth/popup-blocked":
              errorMsg =
                "Popup was blocked by the browser. Please allow popups and try again.";
              break;
            case "auth/popup-closed-by-user":
              errorMsg =
                "Popup was closed by the user before completing the sign-in. Please try again.";
              break;
            case "auth/unauthorized-domain":
              errorMsg =
                "The domain of the application is not authorized to perform this operation. Please authorize the domain in the Firebase Console.";
              break;
            default:
              errorMsg = error.message;
          }
          showToast("Failed", errorMsg, "error");
        });
    } else {
      showToast("Error", "You are already logged in.", "error");
    }
  };

  const user = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
  }, [user]);

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
          className="sign_up_box"
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
                    className="sign_up-btn-form"
                  >
                    Sign Up
                  </Button>
                  <Button
                    leftIcon={<GoogleIcon color={googleIconColor} />}
                    colorScheme="red"
                    variant="outline"
                    width="full"
                    className="sign_up_btn_form_google"
                    onMouseEnter={() => setGoogleIconColor("#495e57")}
                    onMouseLeave={() => setGoogleIconColor("#dfc338")}
                    onClick={signInWithGoogle}
                  >
                    Sign Up with Google
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

// GoogleIcon component
// eslint-disable-next-line react/prop-types
const GoogleIcon = ({ color }) => (
  <svg width="25" height="25" viewBox="0 0 48 48" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.5 20H24V28H35.9C35.1 31.5 31.8 34 28 34C23 34 19 30 19 25C19 20 23 16 28 16C29.9 16 31.7 16.6 33.1 17.6L38 13.1C35.6 11 31.9 9 28 9C18.1 9 10 16.1 10 25C10 33.9 18.1 41 28 41C36.6 41 42 35.6 42 28C42 26.8 41.9 25.6 41.6 24.5H44.5V20Z"
      fill={color}
    />
  </svg>
);
