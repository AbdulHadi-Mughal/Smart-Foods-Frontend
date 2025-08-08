import { useEffect, useState } from "react";
import AddressSection from "../components/userProfile/AddressSection";
import Orders from "../components/userProfile/Orders";
import { errorToast } from "../components/global/Toasts";
import ProfileInfo from "../components/userProfile/ProfileInfo";
import type { User } from "../types/user.type";
import UnauthorizedSection from "../components/userProfile/UnauthorizedSection";
import ProfileInfoSkele from "../components/userProfile/ProfileInfoSkele";
import { AddressesSkeleton } from "../components/userProfile/AddressSkeleton";

const ProfilePage = () => {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/users/me`,
          { credentials: "include" }
        );
        if (res.status === 401) setAuthorized(false);
        else if (!res.ok) throw new Error("Fetch failed");
        const data: User = await res.json();
        setProfile(data);
      } catch (err) {
        console.log(err);
        errorToast("Something went wrong! Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    if (!profile) void fetchProfile();
  }, []);

  if (loading) {
    return (
      <>
        <ProfileInfoSkele />
        <AddressesSkeleton />
      </>
    );
  }

  if (!profile || !authorized) {
    return <UnauthorizedSection />;
  }
  return (
    <>
      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Profile Info Section (full-width) */}
        <section className="max-w-3xl mx-auto space-y-4">
          <header className="space-y-1 text-center">
            <h1 className="text-3xl font-extrabold lg:text-4xl">
              {profile.username}
            </h1>
            <p className="text-muted-foreground lg:text-lg">{profile.email}</p>
          </header>
          <div className="flex justify-center">
            <ProfileInfo
              profileInfo={{
                city: profile.city,
                restaurant: profile.restaurant,
                phoneNumber: profile.phoneNumber,
              }}
              setProfile={setProfile}
            />
          </div>
        </section>

        {/* Addresses Section */}
        <section className="max-w-3xl mx-auto">
          <AddressSection />
        </section>

        {/* Order History Section */}
        <section className="max-w-3xl mx-auto">
          <Orders orders={profile.history} />
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
