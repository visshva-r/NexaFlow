import Image from "next/image";

type IconProps = {
  className?: string;
  size?: number;
};

const src = (name: string) => `/icons/${name}.svg`;

export function SearchIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("search")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function XMarkIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("x-mark")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function LinkIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("link")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function LinkSolidIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("link-solid")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function CubeIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("cube-16-solid")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function CogIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("cog-8-tooth")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function ChartPieIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("chart-pie")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function TrendingUpIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("arrow-trending-up")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function RefreshIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("arrow-path")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function ChevronUpIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("chevron-up")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function ChevronDownIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("chevron-down")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function ChevronUpSolidIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("chevron-up-solid")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function ChevronLeftIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("chevron-left")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export function ChevronRightIcon({ className = "", size = 20 }: IconProps) {
  return <Image src={src("chevron-right")} alt="" width={size} height={size} className={className} aria-hidden />;
}

export const featureIconMap = {
  cube: CubeIcon,
  chart: ChartPieIcon,
  cog: CogIcon,
  link: LinkSolidIcon,
  trending: TrendingUpIcon,
  refresh: RefreshIcon,
  search: SearchIcon,
} as const;
