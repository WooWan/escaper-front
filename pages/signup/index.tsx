import { useRouter } from "next/router";
import SignUpForm from "../../components/signup/SignUpForm";

function SignUp() {
  const router = useRouter();
  const { email } = router.query;

  return (
    <div>
      <SignUpForm email={email} />
    </div>
  );
}

export default SignUp;
