import Image from "next/image";

export default function Loading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-11/12 h-5/6">
      <Image src="/Logo-Golden-Egg.png" alt="Logo" width={900} height={430} />
      {children}
    </div>
  );
}
