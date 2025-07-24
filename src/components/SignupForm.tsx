import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { Label } from "./ui/label";
export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create a New Account</CardTitle>
          <CardDescription>
            Enter your email below to sign up for an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Username</Label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  id="password"
                  name="confirmPassword"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <Button type="submit" className="w-full">
                Create Account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignupForm;
