import { MountainIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Branding = () => {
  return (
    <Link className="mr-6 mt-2" href="#">
      <MountainIcon className="h-6 w-6" />
      <span className="sr-only">Acme Inc</span>
    </Link>
  );
};

export default Branding;
