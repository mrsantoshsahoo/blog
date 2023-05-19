import Link from 'next/link';
import { useRouter } from "next/router";

const demo = ()=> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router= useRouter();
  const pageNumber= router.query.demo;

  return (
    <ul>
      <h1>{(pageNumber)}</h1>
    </ul>
  );
}

export default demo;
