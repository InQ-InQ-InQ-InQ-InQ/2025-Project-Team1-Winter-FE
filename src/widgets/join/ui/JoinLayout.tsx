import {
  Button,
  LoginJoinContainer,
  LoginJoinHeader,
  TextField,
} from "@/shared/ui";
import React from "react";

export default function JoinLayout() {
  return (
    <LoginJoinContainer>
      <LoginJoinHeader name="회원가입" />
      <div className="flex flex-col gap-y-4">
        <FormUnit name="닉네임" />
        <FormUnit name="아이디" />
        <FormUnit name="비밀번호" repeatCheck={false} />
      </div>
      <div className="flex justify-end">
        <Button name="가입하기" className="mt-2" />
      </div>
    </LoginJoinContainer>
  );
}

interface FormUnitProps {
  name: string;
  repeatCheck?: boolean;
}

function FormUnit({ name, repeatCheck = true }: FormUnitProps) {
  return (
    <div className="flex w-full flex-col gap-y-1">
      <label className="text-xl font-semibold">{name}</label>
      <div className="flex gap-x-1">
        <TextField />
        {repeatCheck && (
          <Button name="중복확인" className="w-fit text-sm text-nowrap" />
        )}
        <Button name="완료" className="w-fit text-sm text-nowrap" />
      </div>
    </div>
  );
}
