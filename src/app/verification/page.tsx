import Link from "next/link";
import CustomButton from "../components/customButton/CustomButton";
import HeadBox from "../components/headBox/HeadBox";
import CustomOTPInput from "../components/custom-input/CustomOTPInput";

export default function OTPVerification() {
  return (
    <div className="h-full flex flex-col items-center ">
      <HeadBox
        description="Please enter your correct OTP for number verification process."
        title="OTP verification"
      />
      <div className="flex flex-col items-center gap-6 px-[20px] my-12">
        <CustomOTPInput />

        <CustomButton>Verify</CustomButton>
        <Link className="text-mainColor" href={""}>
          Resend OTP
        </Link>
      </div>
    </div>
  );
}
