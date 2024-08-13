import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import FormInput from "../../components/FormInput/FormInput";
import { useRegisterMutation } from "../../services/auth/auth.endpoints";
import { RegisterRequest } from "../../services/auth/types/register.request";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterFormSchema: ZodType<RegisterRequest> = z.object({
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
    .min(8, { message: "Password should be at least 8 characters long." }),

  confirmPassword: z.string({ message: "Confirm Password is required." }),
});

const Register: FC = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const useFormProps = useForm<RegisterRequest>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const {
    getValues,
    formState: { errors },
    trigger,
  } = useFormProps;

  const handleRegister = async () => {
    try {
      const data = await register(getValues()).unwrap();
      console.log(data);
      // Handle successful registration (e.g., redirect, update state, etc.)
    } catch (e: any) {
      toast.error(e?.data?.message || "An error occurred. Please try again.");
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = await trigger();
    if (!isValid) return;
    handleRegister();
  };

  return (
    <div className="flex h-full w-full justify-center items-center">
      <Card>
        <FormProvider {...useFormProps}>
          <form onSubmit={onSubmit}>
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
                label="Confirm Password"
                errorMessage={errors.confirmPassword?.message}
                name="confirmPassword"
              />
            </div>
            <div className="flex justify-center align-center mt-6">
              <Button
                label={isLoading ? "Registering..." : "Register"}
                fullWidth
                disabled={isLoading}
              />
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default Register;
