export type team = string;

export type TeamBannerProps = {
  team: string;
  onBannerClick?: () => void;
  showName: boolean;
};

export type StatBannerProps = {
  category: string;
  teamValue: number;
  recordValue: number;
  recordTeam: string;
  season: string;
};
