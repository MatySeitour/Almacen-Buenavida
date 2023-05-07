import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <figure className="relative w-full h-full flex justify-center items-center">
        <Image
          className="object-cover absolute z-[10]"
          priority={true}
          width={340}
          height={340}
          sizes="100vw"
          src={"/logo.png"}
          alt="logo"
        />
        <Image
          className="absolute object-cover z-[1] grayscale"
          priority={true}
          width={0}
          height={0}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          sizes="100vw"
          src={"/background.png"}
          alt="backgroundHome"
        />
      </figure>
    </div>
  );
}
