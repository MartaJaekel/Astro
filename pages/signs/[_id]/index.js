import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { _id } = router.query;
  const { data: sign, isLoading, error } = useSWR(`/api/signs/${_id}`);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <Link href={`signs/${_id}`} passHref></Link>
      <Image
        src={`/images/${sign?.name.toLowerCase()}.jpeg`}
        width={200}
        height={200}
      ></Image>
      <h1>{sign.name}</h1>
      <ul>
        <li>Element:{sign.element}</li>
        <li>Ruling Planet:{sign.rulingPlanet}</li>
        <li>Symbol:{sign.symbol}</li>
        <li>Compatibility:{sign.compatibility.join(", ")}</li>
        <li>Lucky Numbers:{sign.luckyNumbers.join(", ")}</li>
        <li>Lucky Color:{sign.luckyColor}</li>
        <li>Lucky Day:{sign.luckyDay}</li>
        <li>Strengths:{sign.strengths.join(", ")}</li>
        <li>Weaknesses:{sign.weaknesses.join(", ")}</li>
      </ul>
    </>
  );
}
