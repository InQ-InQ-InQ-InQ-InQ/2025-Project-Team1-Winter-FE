import { ProfileLayout } from "@/widgets/profile/ui";

interface ProfileParams {
  params: {
    id: string;
  };
}

export default async function Page({ params }: ProfileParams) {
  const awaitedParams = await Promise.resolve(params);
  return <ProfileLayout id={awaitedParams.id} />;
}

// async function getProfile(id: string) {
//   const response = await fetch(`/api/profile/${id}`);
//   const data = await response.json();
//   return data;
// }

export async function generateMetadata({ params }: ProfileParams) {
  const awaitedParams = await Promise.resolve(params);
  return {
    description: `${awaitedParams.id}의 공유 Spots`,
  };
}
