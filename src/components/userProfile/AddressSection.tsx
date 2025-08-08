import type { Address } from "../../types/user.type";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { AddressUpdater } from "./AddressUpdater";
import { UseFetchAddresses } from "../../functions/useFetchAdresses";

const formatPostal = (code: string) =>
  code && code.trim().length > 0 ? code : "—";

const AddressSection: React.FC = function AddressSection() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const fetchAddresses = async () => {
    const addresses: Address[] = await UseFetchAddresses();
    setAddresses(addresses);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const hasData = Array.isArray(addresses) && addresses.length > 0;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"add" | "edit">("add");
  const [selectedAddress, setSelectedAddress] = useState<Address | undefined>();
  return (
    <>
      <AddressUpdater
        allAddresses={addresses}
        setAllAddresses={setAddresses}
        onClose={() => setDialogOpen(false)}
        initialAddress={selectedAddress}
        mode={dialogMode}
        open={dialogOpen}
        // Optional
        onUpdated={fetchAddresses}
      />

      {
        <Card className="bg-white rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Addresses</CardTitle>
            <CardDescription>Saved delivery locations</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {hasData ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead className="border-b rounded-sm border-b-gray-200 text-sm font-semibold">
                    <tr className="w-full bg-muted/50">
                      <th className="text-left font-semibold px-3 py-2">
                        Area
                      </th>
                      <th className="text-left font-semibold px-3 py-2 hidden sm:table-cell">
                        Street
                      </th>
                      <th className="text-left font-semibold px-3 py-2">
                        City
                      </th>
                      <th className="text-left font-semibold px-3 py-2 hidden md:table-cell">
                        Province
                      </th>
                      <th className="text-left font-semibold px-3 py-2 hidden lg:table-cell">
                        Postal Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {addresses.length > 0 &&
                      addresses.map((addr, index) => (
                        <Drawer key={index}>
                          <tr className="group transition">
                            <td className="p-2">{addr.area}</td>
                            <td className="p-2 hidden sm:table-cell">
                              {addr.street}
                            </td>
                            <td className="p-2">{addr.city}</td>
                            <td className="p-2 hidden md:table-cell">
                              {addr.province}
                            </td>
                            <td className="p-2 hidden lg:table-cell">
                              {formatPostal(addr.postalCode)}
                            </td>
                            <td className="p-2">
                              <DrawerTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="lg:opacity-0 group-hover:opacity-100 transition-opacity border-0"
                                  aria-label={`details for ${addr.street} address`}
                                  onClick={() => addr}
                                >
                                  <ExternalLink className="text-black" />
                                </Button>
                              </DrawerTrigger>
                            </td>
                          </tr>
                          <DrawerContent className="max-w-2xl mx-auto px-2 pb-10 pt-4">
                            <DrawerHeader>
                              <DrawerTitle className="text-xl font-semibold">
                                Full Address Details
                              </DrawerTitle>
                            </DrawerHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                              <div className="space-y-1 text-md mx-4">
                                <div>
                                  <span className="font-semibold">
                                    Street:{" "}
                                  </span>{" "}
                                  {addr.street}
                                </div>
                                <div>
                                  <span className="font-semibold">Area: </span>{" "}
                                  {addr.area}
                                </div>
                                <div>
                                  <span className="font-semibold">City: </span>{" "}
                                  {addr.city}
                                </div>
                                <div>
                                  <span className="font-semibold">
                                    Province:{" "}
                                  </span>{" "}
                                  {addr.province}
                                </div>
                                <div>
                                  <span className="font-semibold">
                                    Postal Code:{" "}
                                  </span>{" "}
                                  {formatPostal(addr.postalCode)}
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-2">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  setDialogMode("edit");
                                  setSelectedAddress(addr);
                                  setDialogOpen(true);
                                }}
                              >
                                Edit
                              </Button>
                              <Button onClick={() => {}}>Delete</Button>
                            </div>
                          </DrawerContent>
                        </Drawer>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No address added yet.
              </p>
            )}

            <div className="flex justify-start">
              <Button
                size="lg"
                onClick={() => {
                  setSelectedAddress(undefined);
                  setDialogMode("add");
                  setDialogOpen(true);
                }}
                aria-label="Add new address"
              >
                Add Address
              </Button>
            </div>
          </CardContent>
        </Card>
      }
    </>
  );
};

export default AddressSection;
