import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import { Dropdown } from "primereact/dropdown";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "@nextui-org/react";
import { useContext, useRef } from "react";
import { Toast } from "primereact/toast";
import { AuthContext } from "../App";
const Reservation = () => {
  const user = useContext(AuthContext);
  return <>{user ? <LogedIn /> : <NotLoggedIn />}</>;
};
const NotLoggedIn = () => {
  return (
    <section className="bg-[#DFC338]">
      <div className="container flex items-center min-h-[calc(100vh-200px)] px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-[#DFC338] rounded-full bg-[#495E57] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-[#495E57] md:text-3xl">
            You must login first
          </h1>
        </div>
      </div>
    </section>
  );
};
const LogedIn = () => {
  const times = [
    { label: "17.00", value: "17.00" },
    { label: "17.30", value: "17.30" },
    { label: "18.00", value: "18.00" },
    { label: "18.30", value: "18.30" },
    { label: "19.00", value: "19.00" },
    { label: "19.30", value: "19.30" },
    { label: "20.00", value: "20.00" },
  ];
  // const auth = getAuth(AuthContext);
  const guests = Array.from({ length: 9 }, (_, i) => ({
    label: `${i + 1}`,
    value: i + 1,
  }));

  const locations = [
    { label: "Inside", value: "Inside" },
    { label: "Outside", value: "Outside" },
  ];

  const toast = useRef(null);
  const showSuccessToast = () => {
    toast.current.show({
      severity: "success",
      summary: "Reserved",
      detail: "You have reserved a table as your need",
      life: 3000,
    });
  };
  return (
    <section className="w-full min-h-[calc(100vh-200px)] bg-[#dfc338] py-[60px]">
      <div className="max-w-[1230px] flex justify-center mx-auto px-8">
        <div className="w-[600px] bg-[#495E57] p-[50px] rounded-xl max-[450px]:p-[20px]">
          <Formik
            initialValues={{
              selectedTime: "",
              selectedDate: null,
              message: "",
              numberOfGuest: null,
              selectedLocation: "",
            }}
            validationSchema={Yup.object({
              selectedTime: Yup.string().required("Please select a time"),
              selectedDate: Yup.date().required("Please select a date"),
              numberOfGuest: Yup.number()
                .required("Please select number of guests")
                .min(1, "Please select number of guests"),
              selectedLocation: Yup.string().required(
                "Please select a location"
              ),
              message: Yup.string()
                .required("Please enter a message")
                .min(10, "Message must be at least 15 characters long"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              setTimeout(() => {
                console.log(`Form data: ${JSON.stringify(values)}`);
                setSubmitting(false);
                showSuccessToast();
                resetForm();
              }, 2000);
            }}
          >
            {({ handleSubmit, isSubmitting, values }) => (
              <Form onSubmit={handleSubmit}>
                <Toast ref={toast} position="bottom-right" />
                <div className="flex max-[650px]:block gap-x-[30px] mb-5">
                  <div className="flex-1 max-[650px]:mb-5 calander-field">
                    <Field name="selectedDate">
                      {({ field, form }) => (
                        <Calendar
                          id="selectedDate"
                          value={values.selectedDate}
                          dateFormat="dd/mm/yy"
                          onChange={(e) =>
                            form.setFieldValue(field.name, e.value)
                          }
                          placeholder="Select a Date"
                          className={`w-full text-[white] calander-style h-[48px] md:w-14rem `}
                          // onBlur={() => form.setFieldTouched(field.name, true)}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="selectedDate"
                      component="div"
                      className="p-invalid"
                      style={{
                        color: "#cfb73f",
                        fontWeight: 700,
                        marginTop: "5px",
                        marginLeft: "2px",
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <Field name="selectedTime">
                      {({ field, form }) => (
                        <Dropdown
                          id="selectedTime"
                          {...field}
                          value={field.value}
                          options={times}
                          onChange={(e) =>
                            form.setFieldValue(field.name, e.value)
                          }
                          placeholder="Select a Time"
                          className={`w-full custom-time-style md:w-14rem`}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="selectedTime"
                      component="div"
                      className="p-invalid"
                      style={{
                        color: "#cfb73f",
                        fontWeight: 700,
                        marginTop: "5px",
                        marginLeft: "2px",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <Field name="numberOfGuest">
                    {({ field, form }) => (
                      <Dropdown
                        id="numberOfGuest"
                        {...field}
                        value={field.value}
                        options={guests}
                        onChange={(e) => {
                          form.setFieldValue(field.name, e.value);
                        }}
                        placeholder="Select Number of Guests"
                        className={`w-full guest-custom-css md:w-14rem `}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="numberOfGuest"
                    component="div"
                    className="p-invalid"
                    style={{
                      color: "#cfb73f",
                      fontWeight: 700,
                      marginTop: "5px",
                      marginLeft: "2px",
                    }}
                  />
                </div>
                <div className="mb-5">
                  <Field name="selectedLocation">
                    {({ field, form }) => (
                      <Dropdown
                        id="selectedLocation"
                        {...field}
                        value={field.value}
                        options={locations}
                        onChange={(e) =>
                          form.setFieldValue(field.name, e.value)
                        }
                        placeholder="Select a Location"
                        className={`w-full location-custom-css md:w-14rem `}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="selectedLocation"
                    component="div"
                    className="p-invalid"
                    style={{
                      color: "#cfb73f",
                      fontWeight: 700,
                      marginTop: "5px",
                      marginLeft: "2px",
                    }}
                  />
                </div>
                <div className="mb-5">
                  <Field name="message">
                    {({ field, form }) => (
                      <div>
                        <InputTextarea
                          autoResize
                          value={field.value}
                          onChange={(e) =>
                            form.setFieldValue(field.name, e.target.value)
                          }
                          rows={5}
                          cols={30}
                          placeholder="Your Special Message"
                          onBlur={() => form.setFieldTouched(field.name, true)}
                          className="text-[white] text-area-custom-css w-full"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="p-invalid"
                          style={{
                            color: "#cfb73f",
                            fontWeight: 700,
                            marginTop: "5px",
                            marginLeft: "2px",
                          }}
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="w-full flex justify-center mt-5">
                  <Button
                    className="table-reserve-btn-form"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};
export default Reservation;
