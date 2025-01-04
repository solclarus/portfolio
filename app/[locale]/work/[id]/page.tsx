export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <div className="justify-center tetx-xl font-bold">{params.id}</div>;
}
