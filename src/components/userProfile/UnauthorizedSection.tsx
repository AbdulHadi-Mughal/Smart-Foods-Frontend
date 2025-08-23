import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LogIn, UserPlus } from "lucide-react";

export function UnauthorizedSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-8 text-center">
      <div className="bottom-24 relative">
        <div className="max-w-md mx-auto space-y-6 relative">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            You are not signed in
          </h1>
          <p className="text-muted-foreground max-w-md mb-8 text-base sm:text-lg">
            Please sign in to access your account or create a new one to get
            started.
          </p>
        </div>

        <div className="mx-auto flex flex-col sm:flex-row gap-4 w-full px-4 md:px-2 lg:px-0">
          <Link to="/sign-in?from=/users/me">
            <Button
              size="lg"
              className="w-full h-10 sm:h-12 text-base sm:text-lg flex"
            >
              <LogIn className="w-5 h-5" />
              Sign in to your account
            </Button>
          </Link>

          <Link to="/create-account?from=/users/me">
            <Button
              size="lg"
              variant="secondary"
              className="w-full h-10 sm:h-12 text-base sm:text-lg flex"
            >
              <UserPlus className="w-5 h-5" />
              Create a new account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UnauthorizedSection;
