import { Spinner } from "../ui/shadcn-io/spinner";

const LoadSpinner = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center gap-4">
      <Spinner variant={"ellipsis"} />
    </div>
  );
};

export default LoadSpinner;
