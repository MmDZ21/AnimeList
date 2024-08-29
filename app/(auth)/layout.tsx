import ChangeLocale from "@/components/common/ChangeLocale";

import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute z-30 right-4 top-4">
        <ChangeLocale />
      </div>
      <div className="bg-login bg-cover bg-center lg:hidden absolute inset-0 z-0"></div>
      <div className="absolute lg:hidden inset-0 z-10 dark:bg-gradient-to-t dark:from-background dark:via-background dark:to-background/0"></div>
      <div className="relative z-20 flex justify-center items-center min-h-screen">
        <div className="lg:flex w-full justify-between ltr:lg:flex-row-reverse min-h-screen">
          <div className="flex justify-center items-center lg:w-full lg:max-h-screen">
            {children}
          </div>
          <div className="hidden lg:flex rtl:lg:justify-end ltr:lg:justify-start xl:items-center lg:w-full lg:max-h-screen ">
            <div className="rounded-r-[99px] max-h-screen flex items-center overflow-hidden">
              <Image
                priority
                src="/images/loginpic.webp"
                width={960}
                height={1080}
                alt="anime girl"
                className="h-full aspect-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
