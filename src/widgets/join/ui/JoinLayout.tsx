"use client";

import { LoginJoinContainer, LoginJoinHeader } from "@/shared/ui";
// import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { JOINCONTENT, JOINCONTENT_KR } from "@/widgets/join/model";
import { post } from "@/shared/utils";
import { JOIN_ENDPOINT } from "../api";
import { JoinInfo } from "../types";

export default function JoinLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinInfo>();

  const contents = JOINCONTENT;
  const contentsName = JOINCONTENT_KR;

  async function onSubmit(data: JoinInfo) {
    const response = await post<JoinInfo>({
      endpoint: JOIN_ENDPOINT.JOIN,
      data: data,
    });
    console.log(response);
  }

  return (
    <LoginJoinContainer>
      <LoginJoinHeader name="회원가입" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        {contents.map((content, ind) => (
          <div key={content}>
            <input
              className="textfield"
              type={content}
              placeholder={contentsName[ind]}
              {...register(content)}
            />
            {errors.username && (
              <p className="validation-warn">`${content}를 입력해 주세요`</p>
            )}
          </div>
        ))}
        <input
          className="button"
          onSubmit={handleSubmit(onSubmit)}
          type="submit"
          value="회원가입"
        />
      </form>
    </LoginJoinContainer>
  );
}

// {
//   "username": "hello1234",
//   "password": "qwer1234",
//   "nickname": "hello",
//   "firstName": "Kim",
//   "lastName": "Sumin",
//   "phone": "010-1234-5678",
//   "email": "hello1234@naver.com",
//   "birth": "2025-02-09T16:31:29.017Z",
//   "gender": "FEMALE"
// }
