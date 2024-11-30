import { MY_LINKS } from "@/features/home/constants";
import { CountdownRedirect } from "@/features/link/countdown-redirect";
import { redirect } from "next/navigation";

export default async function LinkPage({
  params,
}: {
  params: Promise<{ link: string }>;
}) {
  const pathname = (await params).link;

  const findLink = MY_LINKS.find((item) => pathname === item.id);

  if (!findLink) {
    redirect("https://wismannur.pro/");
  } else {
    redirect(findLink.href);
  }

  // const destination = findLink.href;

  // return <CountdownRedirect destination={destination} text={findLink.text} />;
}
