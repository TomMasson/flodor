import Image from "next/image";
import Link from "next/link";

const Logo = ({ size, isLink = false, isJPG=false, ...rest }) => {
  const image = (
    <Image
      style={{ clipPath: `circle(${size / 2}px)`, objectFit: "contain" }}
      src={isJPG ? "/images/logo.jpg" : "/images/logo.png"}
      alt="Logo fil etnic"
      width={size}
      height={size}
      {...rest}
    />
  );
  return <>{isLink ? <Link href={"/"}>{image}</Link> : image}</>;
};

export default Logo;
