export async function getData() {
  const res: any = await fetch(`http://demo2911845.mockable.io`, {
    method: "get",
  }).then((res) => res.json());

  return res;
}
