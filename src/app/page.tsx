import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
  <>
  <LoginButton asChild>
    <Button variant="secondary" size="lg" className="self-center">
        login
    </Button>
    </LoginButton>
  </>
  );
}
