import { LatLngTuple } from "leaflet";

export const regions = ["서울", "수원", "전주", "경주", "부산"] as const;

export const coordinates: Record<(typeof regions)[number], LatLngTuple> = {
  서울: [37.56, 127.0],
  수원: [37.26, 127.02],
  전주: [35.82, 127.14],
  경주: [35.85, 129.22],
  부산: [35.17, 129.07],
};
