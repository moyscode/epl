export type team = string;

export type TeamBannerProps = {
  team: string;
  onBannerClick?: () => void;
  showName: boolean;
};
