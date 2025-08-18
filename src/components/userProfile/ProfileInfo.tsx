import { memo, useState } from "react";
import { Edit, PlusCircle } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import ProfileUpdater from "./ProfileUpdater";
import type { User } from "../../types/user.type";

export type ProfileInfoProps = {
  city: string;
  restaurant?: string;
  phoneNumber?: string;
};

type Props = {
  profileInfo: ProfileInfoProps;
  setProfile: React.Dispatch<React.SetStateAction<User | null>>;
};

export type EditableField = keyof ProfileInfoProps;

// Hook for edit dialog state
function useEditDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [field, setField] = useState<{ key: EditableField; value: string }>();
  const open = (key: EditableField, value: string) => {
    setField({ key, value });
    setIsOpen(true);
  };
  return { isOpen, setIsOpen, field, open };
}

// Humanize camelCase keys
const humanize = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

const ProfileInfo = ({ profileInfo, setProfile }: Props) => {
  const fields = Object.keys(profileInfo) as (keyof ProfileInfoProps)[];
  const { isOpen, setIsOpen, field, open } = useEditDialog();

  return (
    <section className="max-w-3xl w-full mx-auto space-y-6 px-4 py-6">
      {/* Edit Dialog */}
      {isOpen && field && (
        <ProfileUpdater
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          field={field.key}
          currentValue={field.value}
          setProfile={setProfile}
        />
      )}

      {/* Section Header */}

      {/* Profile Fields */}
      <div className="grid gap-6 md:grid-cols-2">
        {fields.map((keyName) => {
          const display = profileInfo[keyName] ?? "";

          return (
            <div key={keyName} className="group">
              <Label htmlFor={keyName} className="block mb-1 font-medium">
                {humanize(keyName)}
              </Label>

              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                {display.length > 0 ? (
                  <span
                    id={keyName}
                    className="flex-1 line-clamp-1 text-gray-800"
                  >
                    {display}
                  </span>
                ) : (
                  <span
                    id={"NO-" + keyName}
                    className="flex-1 line-clamp-1 text-gray-400"
                  >
                    Not Provided
                  </span>
                )}
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    open(keyName, display);
                  }}
                  className="lg:opacity-0 group-hover:opacity-100 transition-opacity border-0"
                  aria-label={`Edit ${humanize(keyName)}`}
                >
                  {display.length > 0 ? (
                    <Edit className="h-5 w-5 opacity-50" />
                  ) : (
                    <PlusCircle className="h-5 w-5 opacity-50" />
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(ProfileInfo);
