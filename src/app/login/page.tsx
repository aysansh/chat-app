import Link from "next/link";
import HeadBox from "../components/headBox/HeadBox";
import CustomInput from "../components/custom-input/CustomInput";
import CustomButton from "../components/customButton/CustomButton";

export default function Login() {
  return (
    <div className="h-full flex flex-col justify-between">
      <HeadBox
        description="Enter your 10-digit mobile number to continue."
        title="Login"
      />
      <div className="flex flex-col items-center gap-6 px-[20px]">
        <CustomInput
          label="Mobile"
          placeholder="Enter your phone number"
          type="tel"
          variant={"bordered"}
          radius="full"
        />
        <Link className="text-mainColor w-full" href={"/verification"}>
          <CustomButton>Login</CustomButton>
        </Link>
      </div>

      <div className=" flex justify-center gap-1 mb-5">
        <p>Dont have an account </p>
        <Link className="text-mainColor" href={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
}
