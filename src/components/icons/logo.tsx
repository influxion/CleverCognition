import Image from "next/image";
import ShopLogo from "../../assets/logo-no-bg.png";

export default function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src={ShopLogo}
      alt={`${process.env.SITE_NAME} logo`}
      width={32}
      height={32}
    />
  );
}
