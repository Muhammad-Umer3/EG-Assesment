import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import FormInput from "../../components/FormInput/FormInput";
import { useRegisterMutation } from "../../services/auth/auth.endpoints";
import { RegisterRequest } from "../../services/auth/types/register.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { AppRouteNames } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

const RegisterFormSchema: ZodType<RegisterRequest> = z
  .object({
    firstName: z
      .string({ message: "First name is required." })
      .min(1, { message: "First name is required." }),
    lastName: z
      .string({ message: "Last name is required." })
      .min(1, { message: "Last name is required." }),
    email: z
      .string({ message: "Email is required." })
      .email({ message: "Email must be valid." }),
    password: z
      .string({ message: "Password is required." })
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/.*[A-Za-z].*/, {
        message: "Password must contain at least one letter",
      })
      .regex(/.*\d.*/, {
        message: "Password must contain at least one number",
      })
      .regex(/.*[!@#$%^&*(),.?":{}|<>].*/, {
        message: "Password must contain at least one special character",
      }),
    passwordConfirmation: z.string({
      message: "Password Confirmation is required.",
    }),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        path: ["passwordConfirmation"],
        message: "Passwords do not match.",
      });
    }
  });

const RegisterForm: FC = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const useFormProps = useForm<RegisterRequest>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const {
    getValues,
    formState: { errors },
    trigger,
  } = useFormProps;

  const { updateAuthInfo } = useAuth();

  const handleRegister = async () => {
    try {
      const response = await register(getValues()).unwrap();

      if (response) {
        toast.success("Registration successful!");
        updateAuthInfo(response);
        navigate(AppRouteNames.Home);
      }
    } catch (e: any) {
      toast.error(e.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Card>
        <FormProvider {...useFormProps}>
          <form>
            <div className="mt-6 space-y-4">
              <FormInput
                label="First Name"
                errorMessage={errors.firstName?.message}
                name="firstName"
              />
              <FormInput
                label="Last Name"
                errorMessage={errors.lastName?.message}
                name="lastName"
              />
              <FormInput
                label="Email"
                errorMessage={errors.email?.message}
                name="email"
              />
              <FormInput
                type="password"
                label="Password"
                errorMessage={errors.password?.message}
                name="password"
              />
              <FormInput
                type="password"
                label="Password Confirmation"
                errorMessage={errors.passwordConfirmation?.message}
                name="passwordConfirmation"
              />
            </div>
            <div className="flex flex-row justify-between mt-5">
              <Link to={AppRouteNames.Login}>
                <Anchor label="Already have an account?" href="" />
              </Link>
            </div>

            <div className="flex justify-center align-center mt-6">
              <Button
                label={isLoading ? "Registering..." : "Register"}
                fullWidth
                disabled={isLoading}
                onClick={async () => {
                  const isValid = await trigger();
                  if (!isValid) return;
                  handleRegister();
                }}
              />
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default RegisterForm;
