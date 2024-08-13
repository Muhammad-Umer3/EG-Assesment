import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Checkbox from "../../components/Checkbox/Checkbox";
import FormInput from "../../components/FormInput/FormInput";
import { useLoginMutation } from "../../services/auth/auth.endpoints";
import { LoginRequest } from "../../services/auth/types/login.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { AppRouteNames } from "../../constants/routes";

const LoginFormSchema: ZodType<LoginRequest> = z.object({
  email: z
    .string({ message: "Email is required." })
    .email({ message: "Email must be valid." }),
  password: z.string({ message: "Password is required." }),
});

const LoginForm: FC = () => {
  const [login, { isLoading }] = useLoginMutation();

  const useFormProps = useForm<LoginRequest>({
    resolver: zodResolver(LoginFormSchema),
  });

  const {
    getValues,
    formState: { errors },
    trigger,
  } = useFormProps;

  const handleLogin = async () => {
    try {
      const data = await login(getValues()).unwrap();
      console.log(data);
    } catch (e: any) {
      toast.error(e.data.message);
    }
  };

  return (
    <div className="flex h-full w-full justify-center items-center">
      <Card>
        <FormProvider {...useFormProps}>
          <form>
            <div className="mt-6 space-y-4">
              <FormInput
                label="Login"
                errorMessage={errors.email?.message}
                name="email"
              />
              <FormInput
                type="password"
                errorMessage={errors.password?.message}
                label="Password"
                name="password"
              />
            </div>
            <div className="flex flex-row justify-between mt-5">
              <Checkbox label="Remember me" />
              <Link to={AppRouteNames.Register}>
                <Anchor label="Register" href="" />
              </Link>
            </div>

            <div className="flex justify-center align-center mt-6">
              <Button
                label="Sign in"
                fullWidth
                disabled={isLoading}
                onClick={async () => {
                  const isValid = await trigger();
                  if (!isValid) return;
                  handleLogin();
                }}
              />
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default LoginForm;
