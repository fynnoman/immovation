import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Pavan-rent Logo"
      width={200}
      height={200}
      className={className}
      priority
    />
  );
}
