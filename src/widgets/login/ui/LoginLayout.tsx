import {
  Button,
  LoginJoinContainer,
  LoginJoinHeader,
  TextField,
} from "@/shared/ui";
import Link from "next/link";

export default function LoginLayout() {
  return (
    <LoginJoinContainer>
      <LoginJoinHeader name="로그인" />
      <TextField />
      <TextField />
      <LoginFooter />
    </LoginJoinContainer>
  );
}

function LoginFooter() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex w-[55%] justify-between">
        <Link href="/join">
          <span className="text-md cursor-pointer hover:text-black/50">
            회원가입
          </span>
        </Link>
        <span className="text-md hidden md:block">|</span>
        <button className="l text-md hidden cursor-pointer hover:text-black/50 md:block">
          비밀번호를 잊어버렸어요!
        </button>
      </div>
      <Button name="로그인" />
    </div>
  );
}
