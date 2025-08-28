"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Generate 4-digit code
  const generateCode = () => {
    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem("verificationCode", newCode);
    setCode(newCode);
    console.log("Verification Code:", newCode); // just for testing
  };

  // Step 1 → Step 2
  const handleNextFromStep1 = () => {
    generateCode();
    setStep(2);
    const storedCode = localStorage.getItem("verificationCode");

    // alert(`Your code is ${storedCode}`);
  };

  // Step 2 → Step 3
  const handleNextFromStep2 = () => {
    const storedCode = localStorage.getItem("verificationCode");
    // if (inputCode === storedCode) {
    //   setStep(3);
    // } else {
    //   // alert("Invalid verification code!");
    // }

    setStep(3);
  };

  // Step 3 → Step 4
  const handleComplete = () => {
    // if (!password || password.length < 8)
    //   return alert("Password must be at least 8 characters.");
    // if (password !== confirmPassword) return alert("Passwords do not match.");
    // localStorage.setItem("newPassword", password);
    setStep(4);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#91A8EC] relative">
      {/* Logo box */}
      <div className="rounded-[11px] absolute top-7 left-7 w-15 h-15 flex items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0_#000]">
        <Link href="/">
          <Image
            src="/assets/logo/Logo Bowl Indigo.svg"
            alt="Logo"
            width={48}
            height={48}
          />
        </Link>
      </div>

      {/* Forgot Password Form */}
      <div className="w-130 h-auto bg-white border-3 border-black rounded-lg shadow-[4px_4px_0_#000] p-6 text-center">
        <h1 className="text-3xl font-extrabold text-[#21120D] mb-8">
          Forgot Password?
        </h1>

        {/* Step indicators */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <Image
              src={
                step > 1
                  ? "/assets/forgotpassword-logo/checked.png"
                  : step === 1
                  ? "/assets/forgotpassword-logo/1_icon_tracked.png"
                  : "/assets/forgotpassword-logo/1_icon_untracked.png"
              }
              width={36}
              height={36}
              alt="Step 1"
            />
            <div className="flex-1 h-1 bg-black mx-3"></div>
            <Image
              src={
                step > 2
                  ? "/assets/forgotpassword-logo/checked.png"
                  : step === 2
                  ? "/assets/forgotpassword-logo/2_icon_tracked.png"
                  : "/assets/forgotpassword-logo/2_icon_untracked.png"
              }
              width={36}
              height={36}
              alt="Step 2"
            />
            <div className="flex-1 h-1 bg-black mx-2"></div>
            <Image
              src={
                step > 3
                  ? "/assets/forgotpassword-logo/checked.png"
                  : step === 3
                  ? "/assets/forgotpassword-logo/3_icon_tracked.png"
                  : "/assets/forgotpassword-logo/3_icon_untracked.png"
              }
              width={36}
              height={36}
              alt="Step 3"
            />
          </div>

          {/* Step descriptions */}
          <div className="flex justify-between items-center text-sm font-medium ">
            <span
              className={`text-center ${
                step >= 1 ? "text-[#91A8EC]" : "text-[#D9D9D9]"
              }`}
            >
              Enter Account
            </span>
            <span
              className={`text-center ${
                step >= 2 ? "text-[#91A8EC]" : "text-[#D9D9D9]"
              }`}
            >
              Security Verification
            </span>
            <span
              className={`text-center ${
                step >= 3 ? "text-[#91A8EC]" : "text-[#D9D9D9]"
              }`}
            >
              Set Password
            </span>
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <p className="mb-4">
              Please enter the account you want to <br /> retrieve the password
              for...
            </p>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username/Email"
                className="w-75 border-2 text-black border-black rounded-sm px-3 py-2 focus:outline-none shadow-[4px_4px_0_#000]"
              />
            </div>
            <div>
              <button
                onClick={handleNextFromStep1}
                className="mt-5 w-75 py-2 bg-[#91A8EC] border-2 border-black rounded-sm shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-semibold"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <p className="mb-4">
              Please enter the email verification code to verify your identity
              <br />
              <span className="font-bold">{email}</span>
            </p>

            {/* Input + Resend inside a bordered box */}
            <div className="flex items-center w-75 mx-auto border-2 border-black rounded-sm shadow-[4px_4px_0_#000] mb-4 overflow-hidden">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Verification Code"
                className="flex-1 px-3 py-2 text-black focus:outline-none"
              />
              {/* Divider */}
              <div className="w-px h-6 bg-black"></div>
              {/* Resend */}
              <button
                type="button"
                onClick={generateCode}
                className="px-3 text-sm text-[#91A8EC] hover:underline"
              >
                Resend
              </button>
            </div>

            <button
              onClick={handleNextFromStep2}
              className="w-75 py-2 bg-[#91A8EC] border-2 border-black rounded-sm shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-semibold"
            >
              Next
            </button>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <p className="mb-4">Please set a strong password!</p>
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (8 characters)"
                className="w-75 border-2 border-black rounded-sm px-3 py-2 pr-10 shadow-[4px_4px_0_#000] focus:outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 mr-20 cursor-pointer"
              >
                <Image
                  src="/assets/login-logo/Eye.png"
                  alt="toggle password"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="relative mb-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Please enter password again"
                className="w-75 border-2 border-black rounded-sm px-3 py-2 pr-10 shadow-[4px_4px_0_#000] focus:outline-none"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 mr-20 cursor-pointer"
              >
                <Image
                  src="/assets/login-logo/Eye.png"
                  alt="toggle confirm password"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <button
              onClick={handleComplete}
              className="w-75 py-2 bg-[#91A8EC] border-2 border-black rounded-sm shadow-[4px_4px_0_#000]  hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-semibold"
            >
              Complete
            </button>
          </>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="flex flex-col items-center">
            <Image
              src="/assets/forgotpassword-logo/bigchecked.png"
              width={50}
              height={50}
              alt="Success"
              className="mb-4"
            />
            <p className="font-medium">
              Your new password has been set successfully
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
