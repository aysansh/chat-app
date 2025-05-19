import Link from "next/link";
import CustomButton from "../components/customButton/CustomButton";
import HeadBox from "../components/headBox/HeadBox";
import CustomOTPInput from "../components/custom-input/CustomOTPInput";

export default function OTPVerification() {
  return (
    <div className="h-full flex flex-col justify-between">
      <HeadBox
        description="Please enter your correct OTP for number verification process."
        title="OTP verification"
      />
      <div className="flex flex-col items-center gap-6 px-[20px]">
        <CustomOTPInput radius="full" />
      </div>
      <CustomButton>Verify</CustomButton>

      <div className=" flex justify-center gap-1 mb-5">
        <Link className="text-mainColor" href={"/login"}>
          Resend OTP
        </Link>
      </div>
    </div>
  );
}
