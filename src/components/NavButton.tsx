import Link from "next/link";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

export function NavButton({ icon: Icon, href }: Props) {
  return (
    <Button className="cursor-pointer">
      {href ? (
        <Link href={href} >
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}