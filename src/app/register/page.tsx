import HeadBox from "../components/headBox/HeadBox";
import CustomInput from "../components/custom-input/CustomInput";
import CustomButton from "../components/customButton/CustomButton";
import Link from "next/link";

export default function Register() {
  return (
    <div>
      <HeadBox
        description="Fill up your details to register."
        title="Register"
      />
      <div className="flex flex-col items-center gap-6 px-[20px] my-12">
        <CustomInput
          label="Name"
          placeholder="Enter your email"
          type="text"
          variant={"bordered"}
          radius="full"
        />
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant={"bordered"}
          radius="full"
        />
        <CustomInput
          label="Mobile"
          placeholder="Enter your phone number"
          type="tel"
          variant={"bordered"}
          radius="full"
        />
      </div>
      <div className="p-[20px]">
        <CustomButton>Register</CustomButton>
      </div>
      <div className=" flex justify-center gap-1">
        <p>Already have an account </p>
        <Link className="text-mainColor" href={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}
