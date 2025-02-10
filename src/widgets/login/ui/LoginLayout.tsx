"use client";

import { LoginJoinContainer, LoginJoinHeader } from "@/shared/ui";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { type UserInfo } from "../types";
import { post } from "@/shared/utils";
import { LOGIN_ENDPOINT } from "@/widgets/login/api";

export default function LoginLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  async function onSubmit(data: UserInfo) {
    const response = await post<UserInfo>({
      endpoint: LOGIN_ENDPOINT.LOGIN,
      data: data,
      header: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    console.log(response);
  }

  // if (isSubmitSuccessful) {
  //   return (
  //     <LoginJoinContainer>
  //       <p className="h2">로그인 성공!</p>
  //       <Link href="/">
  //         <p className="button">홈으로</p>
  //       </Link>
  //     </LoginJoinContainer>
  //   );
  // }

  return (
    <LoginJoinContainer>
      <LoginJoinHeader name="로그인" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-y-2"
      >
        <input
          className="textfield"
          type="text"
          placeholder="아이디"
          {...register("username", { required: "아이디를 입력하세요" })}
        />
        {errors.username && (
          <p className="validation-warn">아이디를 입력해 주세요</p>
        )}
        <input
          className="textfield"
          type="password"
          placeholder="비밀번호"
          {...register("password", { required: "아이디를 입력하세요" })}
        />
        {errors.password && (
          <p className="validation-warn">비밀번호를 입력해 주세요</p>
        )}
        <div className="mt-2 flex w-full items-center justify-between">
          <div className="flex w-52 items-center justify-between">
            <Link href="/join">
              <span className="textbutton">회원가입</span>
            </Link>
            <span className="hidden text-sm md:block">|</span>
            <button className="textbutton hidden md:block">
              비밀번호를 잊어버렸어요!
            </button>
          </div>
          <input
            className="button"
            onSubmit={handleSubmit(onSubmit)}
            type="submit"
            value="로그인"
          />
        </div>
      </form>
    </LoginJoinContainer>
  );
}
