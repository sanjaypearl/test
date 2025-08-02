import VerifyEmailPage from "@/components/AuthComponents/VerifyEmailClient";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailPage />
    </Suspense>
  );
}
